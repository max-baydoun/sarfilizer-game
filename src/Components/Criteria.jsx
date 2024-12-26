import React from 'react';

function Criteria({ icon, text }) {
    return (
        <div style={{margin: '10px 0 10px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {icon}
            </div>
            <span style={{ marginTop: '10px', lineHeight: '1', fontSize: '15px'}}>{text}</span>
        </div>
    );
}

export default Criteria;
