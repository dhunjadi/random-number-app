import React from 'react'


export default function Header(props) {

    function chosenOrange() {
        props.setColors({
            bg: 'radial-gradient(circle at 50% -20.71%, #ffd679 0, #ffc776 12.5%, #fbb674 25%, #eca371 37.5%, #d8906c 50%, #c27e67 62.5%, #af6f62 75%, #9e645e 87.5%, #8f5a5a 100%)',
            header: '#8f5a5a',
            txt: '#ffd679',
            btn: '#ffd679',
            btnHover: '#ffc776'
        })
    }

    function chosenGreen() {
        props.setColors({
            bg: 'linear-gradient(180deg, #dcffb8 0, #c7ffba 16.67%, #b1ffba 33.33%, #9df2b9 50%, #8be4b7 66.67%, #7cd7b5 83.33%, #70ccb4 100%)',
            header: '#70ccb4',
            txt: '#dcffb8',
            btn: '#dcffb8',
            btnHover: '#b1ffba'
        })
    }

    function chosenBlue() {
        props.setColors({
            bg: 'radial-gradient(circle at 50% -20.71%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%)',
            header: '#0085e0',
            txt: '#ade5ff',
            btn: '#ade5ff',
            btnHover: '#7dcefb'
        })
    }


    return (
        <div className='header'>
            <h1 className='title' style={{ color: props.txtColor }}>Random Number Generator</h1>
            <div className="color-list">
                <div className="orange" onClick={chosenOrange}></div>
                <div className="green" onClick={chosenGreen}></div>
                <div className="blue" onClick={chosenBlue}></div>
            </div>
        </div>
    )
}
