import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select";
import { Box, FormControl, InputLabel, MenuItem, Tooltip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { green, grey, red } from '@mui/material/colors';

const arabicLetters = ["ء", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"];
const labels = ["ل", "ل", "ع", "ف"];

function RootsDropdown({ numOfRoots, correctRoots, toggleNewWord }) {
    const [currentRoots, setCurrentRoots] = useState(Array(numOfRoots).fill(" "));
    const [color, setColor] = useState(grey[900])

    useEffect(() => {
        setColor(currentRoots.join() === correctRoots.join() ? green['800'] : red['A400'])
    }, [currentRoots])

    const handleSelectedRoot = (index, letter) => {
        const updatedRoots = [...currentRoots];
        updatedRoots[currentRoots.length - index] = letter;
        setCurrentRoots(updatedRoots);
    }


    return (
        <Box sx={{ display: "flex", width: '100%' }}>
            <Grid2
                columns={12}
                columnGap={1}
                rowGap={1}
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    flexWrap: 'wrap',
                    width: '100%'
                }}
            >
                {labels.map(
                    (label, i) =>
                        i >= (numOfRoots === 4 ? 0 : 1) && (
                            <Grid2 size={12 / (numOfRoots + 1)} key={i} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <FormControl key={i} sx={{}}>
                                    <InputLabel sx={{ fontSize: "40px", fontFamily: "Uthmani"}}>{label}</InputLabel>
                                    <Select sx={{ borderRadius: "10px", backgroundColor: "white", fontSize: "50px", textAlign: "center", fontFamily: "Uthmani", width: '200px' }}>

                                        {arabicLetters.map((letter, index) => (
                                            <MenuItem
                                                key={index}
                                                onClick={() => handleSelectedRoot(i, letter)}
                                                sx={{ justifyContent: "center", fontSize: "50px", fontFamily: "Uthmani" }}
                                                value={letter}
                                            >
                                                {letter}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid2>
                        )
                )}
            </Grid2>
            <Grid2 columns={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}}>
                <Tooltip title="Correct Roots?">
                    <WaterDropIcon sx={{color: color, fontSize: '50px'}}/>
                </Tooltip>
            </Grid2>
        </Box>
    );
}

export default RootsDropdown;
