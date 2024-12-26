import React, { useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';

const arabicLetters = [
    'ء', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'
];

function RootsDropdown({ setSelectedRoot, numOfRoots }) {
const [currentRoots, setCurrentRoots] = useState(Array(numOfRoots).fill(" "));

    function handleSelectedRoot(index, letter) {
        const updatedRoots = [...currentRoots];
        updatedRoots[currentRoots.length - index] = letter;
        setCurrentRoots(updatedRoots);
        setSelectedRoot(updatedRoots.join(''))
        console.log(updatedRoots)
    }

    const fontFamilyStyle = { fontFamily: 'Uthmani' };
    const labels = ['ل', 'ل', 'ع', 'ف'];

    return (
        <div id="rootsDropdownBox" style={{display: 'flex' , justifyContent: 'space-between'}}>
            {labels.map((label, i) => (
                i >= (numOfRoots === 4 ? 0 : 1) && (
                    <FormControl key={i} style={{flex: 1, margin: '10px'}}>
                        <InputLabel style={{ fontSize: '40px', ...fontFamilyStyle }}>
                            {label}
                        </InputLabel>
                        <Select
                            sx={{borderRadius: '10px', backgroundColor: 'white', fontSize: '50px', textAlign: 'center', ...fontFamilyStyle }}
                        >
                            {arabicLetters.map((letter, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={() => handleSelectedRoot(i, letter)}
                                    sx={{ textAlign: 'center', fontSize: '50px', ...fontFamilyStyle}}
                                    className="selectDropdown"
                                    value={letter}
                                >
                                    {letter}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )
            ))}
        </div>
    );
}

export default RootsDropdown;
