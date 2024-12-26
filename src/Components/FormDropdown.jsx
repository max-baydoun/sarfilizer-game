import {FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect } from 'react';

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

function FormDropdown({setSelectedForm}) {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <FormControl sx={{ margin: '10px', width: '100%'}}>
                <InputLabel sx={{ fontSize: '20px'}}>
                    Form
                </InputLabel>
                <Select
                    sx={{fontFamily: 'Times New Roman, Times, serif', backgroundColor: 'white', fontSize: '30px', textAlign: 'center' }}
                >
                    {romanNumerals.map((numeral, index) => (
                        <MenuItem onClick={e => setSelectedForm(e.target.textContent)} style={{ fontFamily: 'Times New Roman, Times, serif', textAlign: 'center', fontSize: '30px'}} className="selectDropdown" key={index} value={numeral}>
                            {numeral}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default FormDropdown