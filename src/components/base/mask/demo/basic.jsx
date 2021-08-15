import React, { useState } from 'react';
import { Mask, Button } from 'single-ui';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <h1 className="sn-title">基础使用</h1>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        open Mask
      </Button>
      <Mask visible={visible} onClick={() => setVisible(false)}></Mask>
    </>
  );
};
