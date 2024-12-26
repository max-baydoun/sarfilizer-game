import { Box, FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { useEffect, useState } from "react";
import { green, grey, red } from '@mui/material/colors';

const romanNumerals = ["I - فَعَلَ", "II - تَفْعِيْل", "III - فِعَال و مُفَاعَلَة", "IV - إِفَْعَال", "V - تَفَعُّل", "VI - تَفَاعُل", "VII - اِنْفِعَال", "VIII - اِفْتَعَال", "IX - اِفْعِلَال", "X - اِسْتِفْعَال", "XI", "XII"];
function FormDropdown({ correctForm, toggleNewWord }) {
    const [currentForm, setCurrentForm] = useState("Select");
    const [color, setColor] = useState(grey[900])

    useEffect(() => {
        setColor(currentForm.split('')[0] === correctForm ? green['800'] : red['A400'])
    }, [currentForm])

    useEffect(() => {
        setCurrentForm("Select")
    }, [toggleNewWord])

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%' }}>
            <Grid2
                columns={12}
                columnGap={1}
                rowGap={1}
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                    width: '100%',
                    padding: '0 40px'
                }}
            >
                <FormControl sx={{ margin: "10px", width: "100%", }}>
                    <InputLabel sx={{ fontSize: "20px" }}>Form</InputLabel>
                    <Select value={currentForm} onChange={e => setCurrentForm(e.target.value)} sx={{ fontFamily: currentForm === "Select" ? "Urbanist" : "Uthmani", backgroundColor: "white", fontSize: "40px", textAlign: "center" }}>
                        <MenuItem
                            sx={{ fontFamily: "Urbanist", justifyContent: "center", fontSize: "30px" }}
                            value={"Select"}
                        >
                           Select 
                        </MenuItem>

                        {romanNumerals.map((numeral, index) => (
                            <MenuItem
                                sx={{ fontFamily: "Uthmani", justifyContent: "center", fontSize: "30px" }}
                                key={index}
                                value={numeral}
                            >
                                {numeral}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid2>
            <Grid2 columns={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}}>
                <Tooltip title="Correct Form?">
                    <Diversity2Icon sx={{color: color, fontSize: '50px'}}/>
                </Tooltip>
            </Grid2>
        </Box>
    );
}

export default FormDropdown;
