import React, { useState } from 'react';
import { Switch } from 'react-single-ui';

export default () => {
  const [value1] = useState(false);
  const onClick = (value) => {
    console.log('value:', value);
  };

  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Switch onClick={onClick} value={value1} />
      <h1 className="sn-title">尺寸</h1>
      <Switch onClick={onClick} size="sm" value={value1} />
      <h1 className="sn-title">禁用状态</h1>
      <Switch onClick={onClick} disabled value={value1} />
      <h1 className="sn-title">自定义样式</h1>
      <Switch
        activeColor="#ee0a24"
        inactiveColor="#999"
        onClick={onClick}
        value={value1}
      />
    </>
  );
};
