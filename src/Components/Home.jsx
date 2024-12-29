import React, { useEffect, useState } from "react";
import ArabicWord from "./ArabicWord";
import RootsDropdown from "./RootsDropdown";
import FormDropdown from "./FormDropdown";
import TypeDropdown from "./TypeDropdown";
import Words from "../SarfData.json";
import { Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function Home({ setUserCorrect }) {
    const combinedWordsList = Words.Ism.concat(Words.Fi3l);
    const shuffledCombinedWordsList = fisherYatesShuffle(combinedWordsList);
    const [randomWord, setRandomWord] = useState(shuffledCombinedWordsList[Math.floor(Math.random() * shuffledCombinedWordsList.length)]);
    const [changedWord, setNewWord] = useState(false);

    const handleNewWord = () => {
        setRandomWord(shuffledCombinedWordsList[Math.floor(Math.random() * shuffledCombinedWordsList.length)]);
        setNewWord((prev) => !prev);
    };

    const RandomizeWord = () => {
        return (
            <Button
                variant="contained"
                sx={{
                    ":hover": {
                        backgroundColor: "#4D0013",
                        fontSize: '30px'
                    },
                    textTransform: "none",
                    backgroundColor: "#800020",
                    fontSize: "20px",
                    fontFamily: "Urbanist",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    fontWeight: "700",
                    transition: 'font-size 0.1s ease-in',
                    position: "absolute"
                }}
                onClick={handleNewWord}
            >
                Try another word?
            </Button>
        );
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", minHeight: "100vh" }}>
            <Grid2
                columns={12}
                rowGap={1}
                sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "800px",
                    border: "2px solid black",
                    padding: "10px",
                    borderRadius: "10px",
                    background: "linear-gradient(to top, #1a1a1a, #000000)",
                }}
            >
                <Grid2 size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: '50px'}}>
                    <RandomizeWord />
                </Grid2>
                <Grid2 size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                    <ArabicWord word={randomWord.WORD} />
                </Grid2>
                <Grid2 size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <RootsDropdown
                        toggleNewWord={changedWord}
                        numOfRoots={randomWord.ROOT.replace(/ /g, "").length}
                        correctRoots={randomWord.ROOT.split(" ")}
                        setUserCorrect={setUserCorrect}
                    />
                </Grid2>
                <Grid2 size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <FormDropdown toggleNewWord={changedWord} correctForm={randomWord.FORM} setUserCorrect={setUserCorrect} />
                </Grid2>
                <Grid2 size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <TypeDropdown toggleNewWord={changedWord} correctWordType={randomWord["WORD TYPE"]} setUserCorrect={setUserCorrect} />
                </Grid2>
            </Grid2>
        </Box>
    );
}
export default Home;
