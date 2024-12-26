import { Button } from '@mui/material';
import React from 'react';

function OKButton({toggledButton, setHandleResults}) {
    function handleButtonPress() {
        setHandleResults();
        toggledButton(prevToggle => !prevToggle);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '5px'}}>
            <Button style={{backgroundColor: 'grey', fontSize: '30px', width: '100%'}} onClick={handleButtonPress} variant='contained' value="OK">OK</Button>
        </div>
    )
}

export default OKButton