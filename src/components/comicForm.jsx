import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import useMediaQuery from '@mui/material/useMediaQuery';
import HorizontalStack from "./horizontalContainer";


const ComicForm = ({ onGenerateComic }) => {
    const matches = useMediaQuery('(min-width:1200px)');
  const [text, setText] = useState("");
  const [textArray, setTextArray] = useState([]);
  const [showButton, setShowButton] = useState(true);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddPanel = async (data) => {
    textArray.push({
      text: text,
      status: "processing",
    });
    setShowButton(false)
    query({ inputs: data }).then((response) => {
        setShowButton(true)
      onGenerateComic(response);
    });
    setText("");
  };

  async function query(data) {
    try {
      const response = await fetch(
        "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
        {
          headers: {
            Accept: "image/png",
            Authorization:
              "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      )
      let index = textArray.findIndex((x) => x.text === data.inputs);
      console.log(index)
      console.log(data.inputs)
      setTextArray(
        textArray.map((item) =>
          item.text === data.inputs ? { ...item, status: "success" } : item
        )
      );
      const result = await response.blob();
      return result;
    } catch (error) {
        setTextArray(
            textArray.map((item) =>
              item.text === data.inputs ? { ...item, status: "error" } : item
            )
          );
      console.error(error);
    }
  }
  console.log(textArray)
  return (
    <>
      <form >
        <TextField
          sx={{
            width: "100%",
            borderRadius: "5px",
            marginBottom: "10px",
            backgroundColor: "whitesmoke",
            fontFamily:"Poppins"
          }}
          id="outlined-basic"
          variant="outlined"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text for each panel"
        />
        <Grid container>
          <Grid item xs={12}>
            <Button
            disabled={!showButton}
              variant="contained"
              fullWidth
              sx={{ marginBottom: "5px",
              fontSize:"18px",
               background: "#CA3E47",fontFamily:"Poppins",textTransform:"none",fontWeight:"bold",
               "&.Mui-disabled": {
                background: "rgb(33, 33, 33)",
                color: "grey"
              } }}
              onClick={()=>handleAddPanel(text)}
            >
              Add Panel
            </Button>
          </Grid>
        </Grid>
      </form>
      
      <Box>
        {textArray.length ? (
          <Grid container sx={{ marginTop: "10px",width:"99%"}}>
            {matches?
            <>
            {textArray.map((panelText, index) => (
              <Box
              key={index}
                sx={{
                  background: panelText.status==="error"?"#CA3E47":"#525252",
                  padding: "3px",
                  paddingLeft: "10%",
                  paddingTop: "2.5%",
                  color: "white",
                  width: "100%",
                  height: "100%",
                  marginBottom: "5px",
                  borderRadius: "50px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    fontFamily:"Poppins"
                }}
              >
                {panelText.status==="error"?<>Error</>:panelText.text}
                {panelText.status === "processing" ? (
                  <LinearProgress
                    value={50}
                    sx={{
                      width: "90%",
                      "&.MuiLinearProgress-colorPrimary": {
                        backgroundColor: "#313131", // This changes the color of the track
                      },
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#CA3E47", // This changes the color of the progress bar
                      },
                    }}
                  />
                ) : (
                  <></>
                )}
              </Box>
            ))}
            </>:
            <HorizontalStack  textArray={textArray}/>
            }
          </Grid>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default ComicForm;
