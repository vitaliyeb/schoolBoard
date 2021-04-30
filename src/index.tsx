import React, { CSSProperties } from 'react';


const boardStyle: CSSProperties  = {
  position: 'relative',
  width: '100vw',
  height: '100vh'
};

export const Board = () => {


  return (<div style={boardStyle}>
    <canvas></canvas>
  </div>);
};
