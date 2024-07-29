import React from 'react';

const Diamond = ({ number, color, size }) => {
  const diamondStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: color === 'white' ? 'black' : 'white',
    fontSize: `${size / 2}px`,
  };

  return (
    <div style={diamondStyle}>
      {number}
    </div>
  );
};

export default Diamond;
