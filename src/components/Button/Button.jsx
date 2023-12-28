import React from 'react';
import './Button.css';

export function Button({ width, height, content }) {
  const buttonStyles = {
    width: width ,
    height: height 
  };

  return (
    <div>
      <button style={buttonStyles} className='button'>{content}</button>
    </div>
  );
}

