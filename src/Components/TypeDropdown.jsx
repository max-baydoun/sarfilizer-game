import {FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect } from 'react';

function TypeDropdown({setSelectedType}) {

    const labels = ["Active past Tense (فعل ماض معلوم" , "Active present Tense (فعل مضارع معلوم" , "Active participle (اسم فاعل" ,
                    "Passive past Tense (فعل ماض مبني للمجهول", "Passive present Tense (فعل مضارع مبني للمجهول", "Passive participle (اسم مفعول",
                    "Masdar (مصدر", "Command (أمر"
                    ]
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <FormControl sx={{ margin: '10px', width: '100%' }}>
                <InputLabel sx={{ fontSize: '20px'}}>
                    Type 
                </InputLabel>
                <Select
                    style={{ backgroundColor: 'white', fontSize: '30px', textAlign: 'center', fontFamily: 'Uthmani' }}
                >
                    {labels.map((label, index) => (
                        
                        <MenuItem onClick={e => setSelectedType(e.target.textContent)} style={{fontSize: '30px', fontFamily: 'Uthmani'}} className="selectDropdown" key={index} value={label}>
                            {label.split('(')[0]}
                            <br />
                            ({label.split('(')[1]})
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>

    )
}

export default TypeDropdown