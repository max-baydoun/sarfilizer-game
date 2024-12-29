import React from "react";
import { Typography } from "@mui/material";
import "../index.css";

function ArabicWord({ word }) {
    return (
        <Typography
            sx={{
                fontSize: "clamp(7rem, 11vw, 15rem)",
                fontFamily: "Uthmani",
                whiteSpace: "nowrap",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}
        >
            {word}
        </Typography>
    );
}

export default ArabicWord;
