import React from 'react';

const Child = ({ SetValue }) => {
  return (
    <div>
      <h2> Child </h2>
      <button onClick={() => SetValue('State Updated')}>Click</button>
      <button onClick={() => SetValue('Update the State')}>Undo</button>
    </div>
  );
};

export default Child;
