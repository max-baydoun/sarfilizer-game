import React from 'react';
import { Box, Typography } from '@mui/material';
import '../index.css'

function ArabicWord({word}) {

    return (
        <Box sx={{
            backgroundColor: 'white',
            border: 'solid 3px black',
            borderRadius: '50px',
            height: 'fit-content',
            margin: '30px auto',
        }}> 
            <Typography sx={{padding: '10px 40px', fontSize: '150px', fontFamily: 'Uthmani'}}>{word}</Typography>
        </Box>
    )
}

export default ArabicWord