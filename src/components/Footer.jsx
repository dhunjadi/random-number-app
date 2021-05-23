import React from 'react'

export default function Footer(props) {
    
    let year = new Date().getFullYear();

    return (
        <div className="footer">
            <p style={{color: props.txtColor}}>Copyright {year} Dario Hunjadi</p>
        </div>
    )
}
