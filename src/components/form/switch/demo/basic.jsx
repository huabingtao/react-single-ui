import React, { useState } from 'react';
import { Switch } from 'react-single-ui';

export default () => {
  const [value1, setValue1] = useState(false);
  const onClick = (value) => {
    console.log('value:', value);
    setValue1(value);
  };

  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Switch onClick={onClick} value={value1} />
      <h1 className="sn-title">Small</h1>
      <Switch onClick={onClick} size="sm" value={value1} />
      <h1 className="sn-title">Disabled</h1>
      <Switch onClick={onClick} disabled value={value1} />
      <h1 className="sn-title">Custom color</h1>
      <Switch
        activeColor="#ee0a24"
        inactiveColor="#999"
        onClick={onClick}
        value={value1}
      />
    </>
  );
};
