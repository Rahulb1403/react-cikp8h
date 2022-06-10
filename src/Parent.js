import React, { useState } from 'react';
import Child from './Child.js';

const Parent = () => {
  const [value, setValue] = useState('Update the State');
  return (
    <div>
      <h2> Parent </h2>
      {value}
      <Child SetValue={setValue} />
    </div>
  );
};

export default Parent;
