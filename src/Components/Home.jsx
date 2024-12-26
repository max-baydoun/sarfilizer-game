import React, { useEffect, useState } from 'react';
import ArabicWord from './ArabicWord';
import RootsDropdown from './RootsDropdown';
import FormDropdown from './FormDropdown';
import TypeDropdown from './TypeDropdown'
import Words from '../SarfData.json'
import '../ComponentsCSS/home.css'
import OKButton from './OKButton';
import Results from './Results';
import { Button } from '@mui/material';



function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function Home() {
    const [selectedRoot, setSelectedRoot] = useState("");
    const [selectedForm, setSelectedForm] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [results, setResults] = useState({
      correctRoot: "",
      correctForm: "",
      correctWordType: ""
    })
    const [okButtonToggle, setOkButtonToggle] = useState(false);
    

    
    const combinedWordsList = Words.Ism.concat(Words.Fi3l);
    const shuffledCombinedWordsList = fisherYatesShuffle(combinedWordsList)
    const [randomWord, setRandomWord] = useState();

    function handleResults() {
      setResults((prevResults) => {
          const finalResult = { ...prevResults };
          const newSelectedRoot = selectedRoot.split('').join(' ');
          const newSelectedType = selectedType.substring(0, selectedType.indexOf('(')).trim();
          if (newSelectedRoot !== '') {
              finalResult.correctRoot = randomWord.ROOT === newSelectedRoot;
          }
          if (selectedForm !== '') {
              finalResult.correctForm = randomWord.FORM === selectedForm;
          }
          if (newSelectedType !== '') {
              finalResult.correctWordType = randomWord["WORD TYPE"] === newSelectedType;
          }
          console.log(newSelectedRoot, selectedForm, newSelectedType);
          return finalResult;
      });
  }
  
    useEffect(() => {
      setRandomWord(shuffledCombinedWordsList[Math.floor(Math.random()*shuffledCombinedWordsList.length)]);
    }, [])

    return (
        <div className='main'>
          {randomWord && <div id='containedMain'>
            <ArabicWord  word={randomWord.WORD} />
            <RootsDropdown setSelectedRoot={setSelectedRoot} numOfRoots={randomWord.ROOT.replace(/ /g, '').length}/>
            <FormDropdown setSelectedForm={setSelectedForm} />
            <TypeDropdown setSelectedType={setSelectedType}n/>
            <OKButton toggledButton={setOkButtonToggle} setHandleResults={handleResults}/>
            <Results toggleButtonBool={okButtonToggle} boolRoots={results.correctRoot} boolForm={results.correctForm} boolType={results.correctWordType}/>
            <Button onClick={() => window.location.reload()}>Try another word?</Button>
          </div>}
        </div>
    )
}
export default Home