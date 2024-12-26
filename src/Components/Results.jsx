import React, { useEffect, useState } from 'react';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import Groups3Icon from '@mui/icons-material/Groups3';
import { green, grey, red } from '@mui/material/colors';
import Criteria from './Criteria';

function Results({toggleButtonBool, boolRoots, boolForm, boolType}) {
    const [rootColor, setRootColor] = useState(grey[900])
    const [formColor, setFormColor] = useState(grey[900])
    const [typeColor, setTypeIcon] = useState(grey[900])
    const criterias = [
        [<WaterDropIcon style={{fontSize: '50px', color: rootColor}}/>, "Correct Roots?"],
        [<Diversity2Icon style={{ fontSize: '50px', color: formColor}}/>, "Correct Form?"],
        [<Groups3Icon style={{fontSize: '50px', color: typeColor}}/>, "Correct Word Type?"]
    ];
    useEffect(() => {
        console.log(boolRoots, boolForm, boolType)
        if (boolRoots !== '') setRootColor(boolRoots === true ? green['300'] : red['A400'])
        if (boolForm !== '') setFormColor(boolForm == true ? green['300'] : red['A400'])
        if (boolType !== '') setTypeIcon(boolType === true ? green['300'] : red['A400'])
    }, [toggleButtonBool])
    return (
        <div style={{ textAlign: 'center', fontSize: '30px' }}>
            {criterias.map(([icon, text], index) => (
                <Criteria key={index} icon={icon} text={text} />
            ))}
        </div>
    );
}


export default Results