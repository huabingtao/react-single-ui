import React, { useState } from 'react';
import { Mask, Button } from 'react-single-ui';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Button btnType="primary" onClick={() => setVisible(true)}>
        open Mask
      </Button>
      <Mask visible={visible} onClick={() => setVisible(false)}></Mask>
    </>
  );
};
