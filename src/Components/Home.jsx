import React, { useState } from "react";
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

function Home() {
    const combinedWordsList = Words.Ism.concat(Words.Fi3l);
    const shuffledCombinedWordsList = fisherYatesShuffle(combinedWordsList);
    const [randomWord, setRandomWord] = useState(shuffledCombinedWordsList[Math.floor(Math.random() * shuffledCombinedWordsList.length)]);
    const [changedWord, setNewWord] = useState(false);

    const handleNewWord = () => {
        setRandomWord(shuffledCombinedWordsList[Math.floor(Math.random() * shuffledCombinedWordsList.length)]);
        setNewWord(prev => !prev);
    }

    const RandomizeWord = () => {
        return (
            <Button variant="contained" sx={{textTransform: "none"}} onClick={handleNewWord}>
                Try another word?
            </Button>
        )
    }

    return (
        <Box id="containedMain" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}}>
            <Grid2 columns={12} rowGap={1} sx={{flexDirection: 'column', justifyContent: "center", alignItems: "center", width: '800px', border: '5px solid black', padding: '10px', borderRadius: '10px', backgroundColor: 'rgb(150, 150, 150)'}}>
                <Grid2 size={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px'}}>
                    <RandomizeWord />
                </Grid2>
                <Grid2 size={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ArabicWord word={randomWord.WORD} />
                </Grid2>
                <Grid2 size={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <RootsDropdown toggleNewWord={changedWord} numOfRoots={randomWord.ROOT.replace(/ /g, "").length} correctRoots={randomWord.ROOT.split(' ')} />
                </Grid2>
                <Grid2 size={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <FormDropdown toggleNewWord={changedWord} correctForm={randomWord.FORM} />
                </Grid2>
                <Grid2 size={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <TypeDropdown toggleNewWord={changedWord} correctWordType={randomWord["WORD TYPE"]} />
                </Grid2>
            </Grid2>
        </Box>
    );
}
export default Home;
