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

      <Modal
        visible={visible1}
        title="标题"
        message="代码是写出来给人看的，附带能在机器上运行"
      ></Modal>
    </>
  );
};
