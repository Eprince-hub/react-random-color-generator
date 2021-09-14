import React from 'react';
import ColorValueDisplay from './ColorValueDisplay';
import CustomBoxDisplay from './CustomBoxDisplay';

function RightColorBox() {
  return (
    <div className='rightColorBox'>
      <ColorValueDisplay />
      <CustomBoxDisplay />
    </div>
  );
}

export default RightColorBox;
