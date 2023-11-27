import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
//   padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const ComicForm = ({ onGenerateComic }) => {
  const [text, setText] = useState("");
  const [textArray, setTextArray] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleGenerateComic = async (e) => {
    e.preventDefault();
    console.log(text)
    textArray.map((text)=>{
        query({ inputs: text }).then((response) => {
          onGenerateComic(response);
        });
    })
  };
  const handleAddPanel = async (e) => {
    setTextArray([...textArray, text])
    setText("");
  };

  async function query(data) {
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
    );
    const result = await response.blob();
    return result;
  }

  return (
    <>
    <form onSubmit={handleGenerateComic}>
      <TextField
        sx={{ width: "100%",borderRadius:"5px", marginBottom: "10px",backgroundColor:"whitesmoke" }}
        id="outlined-basic"
        variant="outlined"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text for each panel"
      />
      <Grid container  >
        <Grid
          item
          xs={12}
        >
          <Button variant="contained"  fullWidth sx={{marginBottom:"5px",background:"#CA3E47"}}
          onClick={handleAddPanel}>
            Add new panel text
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" fullWidth sx={{marginBottom:"5px",backgroundColor:"#CA3E47",
          "&.Mui-disabled": {
            background: "rgb(33, 33, 33)",
            color: "grey"
          }}} 
          disabled={textArray.length?false:true}>
            Generate Comic
          </Button>
        </Grid>
      </Grid>
    </form>
    <Box>
        {textArray.length?<Grid container sx={{marginTop:"10px"}}>
            {textArray.map((panelText,index)=>(
                // <Grid Item sx={{border:"0.5px solid grey",padding:"2px"}} xs={12}>
                //     {panelText}
                // </Grid>
                <Button variant="outlined"
                 fullWidth 
                 disabled
                   sx={{marginBottom:"5px",
                   borderRadius:"50px",
                   justifyContent:"left",
                   textTransform: 'none',
                "&.Mui-disabled": {
                    background: "rgb(33, 33, 33)",
                    color: "white"
                  }}}>{panelText}</Button>
            ))}
        </Grid>:<>
        </>}
    </Box>
    </>
  );
};

export default ComicForm;
