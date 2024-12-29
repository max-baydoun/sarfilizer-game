import { Box, FormControl, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import { green, grey } from "@mui/material/colors";
import Groups3Icon from "@mui/icons-material/Groups3";
import "../animateRotation.css";

const labels = [
    "Active past Tense (فعل ماض معلوم",
    "Active present Tense (فعل مضارع معلوم",
    "Active participle (اسم فاعل",
    "Passive past Tense (فعل ماض مبني للمجهول",
    "Passive present Tense (فعل مضارع مبني للمجهول",
    "Passive participle (اسم مفعول",
    "Verbal noun (مصدر",
    "Command (أمر",
];

function TypeDropdown({ correctWordType, toggleNewWord, setUserCorrect }) {
    const [currentWordType, setCurrentWordType] = useState("Type");
    const [color, setColor] = useState(grey[900]);
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        const isCorrect = currentWordType.substring(0, currentWordType.indexOf("(")).trim() === correctWordType;
        setColor(isCorrect ? green["800"] : "#E63946");
        setRotate(isCorrect);
        setUserCorrect((prev) => {
            return [prev[0], prev[1], isCorrect];
        });
    }, [currentWordType]);

    useEffect(() => {
        setCurrentWordType("Type");
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
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    padding: "0 40px",
                }}
            >
                <FormControl sx={{ margin: "10px", width: "100%" }}>
                    <Select
                        value={currentWordType}
                        onChange={(e) => setCurrentWordType(e.target.value)}
                        sx={{
                            borderRadius: "20px",
                            fontWeight: "600",
                            fontFamily: currentWordType === "Type" ? "Urbanist" : "Uthmani",
                            backgroundColor: "white",
                            fontSize: "40px",
                            textAlign: "center",
                        }}
                    >
                        <MenuItem sx={{ fontFamily: "Uthmani", justifyContent: "center", fontSize: "30px" }} value={"Type"}>
                            Type
                        </MenuItem>
                        {labels.map((label, index) => (
                            <MenuItem sx={{ fontSize: "30px", fontFamily: "Uthmani", justifyContent: "center" }} key={index} value={label}>
                                {label + ")"}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid2>
            <Grid2 columns={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
                <Tooltip title="Correct Word Type?">
                    <Groups3Icon
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

export default TypeDropdown;
