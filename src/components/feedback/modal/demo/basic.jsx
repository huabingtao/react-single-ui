import React, { useState } from 'react';
import { Modal, Button } from 'single-ui';

export default () => {
  const [visible1, setVisible1] = useState(false);
  const show = () => {
    setVisible1(true);
  };
  return (
    <>
      <Button block btnType="primary" onClick={show}>
        text only
      </Button>

      <Modal visible={visible1}>
        <div>pppppp</div>
        <div>pppppp</div>
        <div>pppppp</div>
        <div>pppppp</div>
        <div>pppppp</div>
        <div>pppppp</div>
      </Modal>
    </>
  );
};
