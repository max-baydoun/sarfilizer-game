import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import { Box, FormControl, InputLabel, MenuItem, Tooltip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { green, grey } from "@mui/material/colors";
import "../animateRotation.css";

const arabicLetters = ["ء", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"];
const labels = ["ل", "ل", "ع", "ف"];

function RootsDropdown({ numOfRoots, correctRoots, toggleNewWord, setUserCorrect }) {
    const [currentRoots, setCurrentRoots] = useState(Array(numOfRoots).fill("-"));
    const [color, setColor] = useState(grey[900]);
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        const isCorrect = currentRoots.join() === correctRoots.join();
        setColor(isCorrect ? green["800"] : "#E63946");
        setRotate(isCorrect);
        setUserCorrect((prev) => {
            return [isCorrect, prev[1], prev[2]];
        });
    }, [currentRoots]);

    useEffect(() => {
        setCurrentRoots(Array(numOfRoots).fill("-"));
    }, [toggleNewWord]);

    const handleSelectedRoot = (index, letter) => {
        if (letter === undefined) return;
        const updatedRoots = [...currentRoots];
        updatedRoots[currentRoots.length - index] = letter;
        setCurrentRoots(updatedRoots);
        console.log(index, letter, updatedRoots);
    };

    const cellStyle = {
        ":hover": {
            color: "white",
            backgroundColor: "black",
        },
        borderRadius: "12px",
        backgroundColor: "#D3D3D3",
        textAlign: "center",
        fontSize: "50px",
        fontStyle: "Urbanist",
        margin: "5px",
        transition: "background-color 0.2s ease-out, color 0.2s ease-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                "@media (max-width: 800px)": {
                    flexDirection: "column-reverse",
                },
            }}
        >
            <Grid2
                columns={12}
                columnGap={1}
                rowGap={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    "@media (max-width: 800px)": {
                        flexDirection: "column-reverse",
                    },
                }}
            >
                {labels.map(
                    (label, i) =>
                        i >= (numOfRoots === 4 ? 0 : 1) && (
                            <Grid2 size={12 / (numOfRoots + 1)} key={i} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <FormControl key={i}>
                                    <InputLabel sx={{ fontSize: "40px", fontFamily: "Uthmani" }}>{label}</InputLabel>
                                    <Select
                                        onChange={(e) => handleSelectedRoot(i, e.target.value)}
                                        value={currentRoots[currentRoots.length - i]}
                                        sx={{
                                            borderRadius: "20px",
                                            fontWeight: "600",
                                            backgroundColor: "white",
                                            fontSize: "50px",
                                            textAlign: "center",
                                            fontFamily: "Uthmani",
                                            width: "200px",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <MenuItem sx={{ ...cellStyle, fontFamily: "Urbanist" }} value={"-"}>
                                            -
                                        </MenuItem>
                                        {arabicLetters.map((letter, index) => (
                                            <MenuItem key={index} sx={{ ...cellStyle, fontFamily: "Uthmani" }} value={letter}>
                                                {letter}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid2>
                        )
                )}
            </Grid2>
            <Grid2 columns={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                <Tooltip title="Correct Roots?">
                    <WaterDropIcon
                        className={rotate ? "rotate" : "none"}
                        sx={{
                            color: color,
                            fontSize: "50px",
                            transition: "color 0.5s ease",
                        }}
                    />
                </Tooltip>
            </Grid2>
        </Box>
    );
}

export default RootsDropdown;
