import React from 'react';
import '../ComponentsCSS/arabicWord.css'
import '../fonts/KFGQPC Uthmanic Script HAFS Regular.otf'

function ArabicWord({word}) {

    return (
        <div id='wordBox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div id='word'>
                {word}
            </div>
        </div>
    )
}

export default ArabicWord