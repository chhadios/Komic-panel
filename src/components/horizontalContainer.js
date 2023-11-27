import React from 'react';
import {  Box } from '@mui/material';
import LinearProgress from "@mui/material/LinearProgress";
const HorizontalScrollGrid = ({ data }) => {
    return (
        <Box
            sx={{
                padding:"10px",
                width: "100%",
                display: 'flex',
                overflowX: 'auto',
                '& > :not(style)': {
                    flexShrink: 0,
                },
            }}
        >
            {data.map((panelText, index) => (
                <Box
                    sx={{
                        marginRight: "5px",
                        background: "#525252",
                        padding: "3px",
                        paddingLeft: "2%",
                        paddingTop: "1%",
                        color: "white",
                        minWidth: "120px",
                        maxWidth: "300px",
                        minHeight: "30px",
                        height: "100%",
                        marginBottom: "5px",
                        borderRadius: "50px",
                        boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        fontFamily: "Poppins"
                    }}
                >
                    {panelText.text}
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
        </Box>
    );
};

const HorizontalStack = ({ textArray }) => {

    return (
        <div style={{ width: "100%" }}>
            <HorizontalScrollGrid data={textArray} />
        </div>
    );
};

export default HorizontalStack;
