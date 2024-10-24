import React from 'react';

const Button = ({ onClick, value }) => {
  return (
    <button className="button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default Button;
