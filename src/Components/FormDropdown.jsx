import { Box, FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import { useEffect, useState } from "react";
import { green, grey } from "@mui/material/colors";
import "../animateRotation.css";

const romanNumerals = [
    "I - فَعَلَ",
    "II - تَفْعِيْل",
    "III - فِعَال و مُفَاعَلَة",
    "IV - إِفَْعَال",
    "V - تَفَعُّل",
    "VI - تَفَاعُل",
    "VII - اِنْفِعَال",
    "VIII - اِفْتَعَال",
    "IX - اِفْعِلَال",
    "X - اِسْتِفْعَال",
    "XI",
    "XII",
];
function FormDropdown({ correctForm, toggleNewWord, setUserCorrect }) {
    const [currentForm, setCurrentForm] = useState("Form");
    const [color, setColor] = useState(grey[900]);
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        const isCorrect = currentForm.split(" ")[0] === correctForm;
        setColor(isCorrect ? green["800"] : "#E63946");
        setRotate(isCorrect);
        setUserCorrect(prev => {return [prev[0], isCorrect, prev[2]]})
    }, [currentForm]);

    useEffect(() => {
        setCurrentForm("Form");
    }, [toggleNewWord]);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
                    width: "100%",
                    padding: "0 40px",
                }}
            >
                <FormControl sx={{ margin: "10px", width: "100%" }}>
                    <Select
                        value={currentForm}
                        onChange={(e) => setCurrentForm(e.target.value)}
                        sx={{ borderRadius: '20px', fontWeight: '600', fontFamily: currentForm === "Form" ? "Urbanist" : "Uthmani", backgroundColor: "white", fontSize: "40px", textAlign: "center" }}
                    >
                        <MenuItem sx={{ fontFamily: "Urbanist", justifyContent: "center", fontSize: "30px" }} value={"Form"}>
                            Form
                        </MenuItem>

                        {romanNumerals.map((numeral, index) => (
                            <MenuItem sx={{ fontFamily: "Uthmani", justifyContent: "center", fontSize: "30px" }} key={index} value={numeral}>
                                {numeral}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid2>
            <Grid2 columns={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                <Tooltip title="Correct Form?">
                    <Diversity2Icon
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

export default FormDropdown;
