import React from 'react';
import CustomBoxDisplay from './CustomBoxDisplay';

function RightColorBox() {
  return (
    <div className='rightColorBox'>
      <div>
        <h2 className='valueDescription'>
          Hex Value: <span>Dummy Value</span>
        </h2>
        <h2 className='valueDescription'>
          RGB Value: <span>Dummy Value</span>
        </h2>
      </div>

      <CustomBoxDisplay />

      <div className='customBoxButton'>
        <button className='customButton'>Select Hue / Luminosity</button>
        <button className='customButton'>Custom Color Box</button>
      </div>
    </div>
  );
}

export default RightColorBox;
