import React, { useState } from 'react';
import { TabBar, TabBarItem } from 'single-ui';

export default () => {
  const [value1, setValue1] = useState(false);
  const onClick = (value) => {
    console.log('value:', value);
    setValue1(value);
  };

  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <TabBar
        onSelect={(index) => {
          console.log(index);
        }}
      >
        <TabBarItem index="0">1</TabBarItem>
        <TabBarItem index="1">2</TabBarItem>
        <TabBarItem index="2">3</TabBarItem>
      </TabBar>
    </>
  );
};
