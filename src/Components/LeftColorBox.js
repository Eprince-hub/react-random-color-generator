import React, { useState } from 'react';
import ButtomButton from './BottomButton';

function LeftColorBox() {
  function generateRandomHex() {
    const colorValues = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
      colorHex += colorValues[Math.floor(Math.random() * colorValues.length)];
    }

    return colorHex;
  }
  // const hexvalue = LeftColorBox();

  const [backgroundColor, setBackgroundColor] = useState('black');
  return (
    <div className='leftColorBox' style={{ backgroundColor: backgroundColor }}>
      <h1>SHow hello from the Left box</h1>
      <button
        onClick={() => {
          setBackgroundColor(generateRandomHex());
        }}
      >
        Change the Color
      </button>
    </div>
  );
}

export default LeftColorBox;
