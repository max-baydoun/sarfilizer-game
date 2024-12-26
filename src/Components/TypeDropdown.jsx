import { Box, FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import { green, grey, red } from '@mui/material/colors';
import Groups3Icon from '@mui/icons-material/Groups3';

const labels = [
    "Active past Tense (فعل ماض معلوم",
    "Active present Tense (فعل مضارع معلوم",
    "Active participle (اسم فاعل",
    "Passive past Tense (فعل ماض مبني للمجهول",
    "Passive present Tense (فعل مضارع مبني للمجهول",
    "Passive participle(اسم مفعول",
    "Verbal noun (مصدر",
    "Command (أمر",
];

function TypeDropdown({ correctWordType, toggleNewWord  }) {
    const [currentWordType, setCurrentWordType] = useState(" ");
    const [color, setColor] = useState(grey[900])

    useEffect(() => {
        setColor(currentWordType.substring(0, currentWordType.indexOf("(")).trim() === correctWordType ? green['800'] : red['A400'])
    }, [currentWordType])

    useEffect(() => {
        setCurrentWordType("Select")
    }, [toggleNewWord])


    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%'}}>
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
                    padding: '0 40px'
                }}
            >
                <FormControl sx={{ margin: "10px", width: "100%" }}>
                    <InputLabel sx={{ fontSize: "20px" }}>Type</InputLabel>
                    <Select value={currentWordType} onChange={e => setCurrentWordType(e.target.value)} sx={{ fontFamily: currentWordType === "Select" ? "Urbanist" : "Uthmani", backgroundColor: "white", fontSize: "40px", textAlign: "center" }}>
                        <MenuItem
                            sx={{ fontFamily: "Uthmani", justifyContent: "center", fontSize: "30px" }}
                            value={"Select"}
                        >
                           Select 
                        </MenuItem>
                        {labels.map((label, index) => (
                            <MenuItem
                                sx={{ fontSize: "30px", fontFamily: "Uthmani", justifyContent: 'center'}}
                                key={index}
                                value={label}
                            >
                                {label + ')'}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid2>
            <Grid2 columns={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}}>
                <Tooltip title="Correct Word Type?">
                    <Groups3Icon sx={{color: color, fontSize: '50px'}}/>
                </Tooltip>
            </Grid2>
        </Box>
    );
}

export default TypeDropdown;
