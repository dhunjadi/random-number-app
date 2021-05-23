import React, { useState } from 'react'
import '../styles.css'
import Header from './Header';
import Footer from './Footer'


function App() {

  const [minInput, setMinInput] = useState(0)
  const [maxInput, setMaxInput] = useState(9)
  const [randomNumber, setRandomNumber] = useState(0)
  const [btnHover, setBtnHover] = useState(false)


  const [colors, setColors] = useState({
    bg: 'radial-gradient(circle at 50% -20.71%, #ffd679 0, #ffc776 12.5%, #fbb674 25%, #eca371 37.5%, #d8906c 50%, #c27e67 62.5%, #af6f62 75%, #9e645e 87.5%, #8f5a5a 100%)',
    header: '#8f5a5a',
    txt: '#ffd679',
    btn: '#ffd679',
    btnHover: '#ffc776'
  })

  function minInputHandler(e) {
    setMinInput(Number(e.target.value))
    console.log(e.target.value)
  }

  function maxInputHandler(e) {
    setMaxInput(Number(e.target.value))
  }

  function generateNumber() {
    setRandomNumber(Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput)
  }

  function handleMouseOver() {
    setBtnHover(true)
  }

  function handleMouseOut() {
    setBtnHover(false)
  }


  return (
    <div className="App" style={{ backgroundImage: colors.bg }}>
      <Header
        setColors={setColors}
        txtColor={colors.header}
      />
      <div className="container">
        <span
          className="random-number"
          style={{ color: colors.txt }}>{randomNumber}</span>
        <div className="input-div">
          <input
            type="number"
            className="min-input"
            style={{ color: colors.txt, border: `2px solid ${colors.txt}` }}
            placeholder={minInput}
            onChange={minInputHandler}
          />
          <input
            type="number"
            className="max-input"
            style={{ border: `2px solid ${colors.txt}` }}
            placeholder={maxInput}
            onChange={maxInputHandler}
          />
        </div>
        <button
          onClick={generateNumber}
          style={{ backgroundColor: btnHover ? colors.btnHover : colors.btn }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>Get Random Number</button>
      </div>
      <Footer txtColor={colors.txt} />
    </div>
  );
}

export default App;
