import React from 'react';
import { Toast, Button } from 'single-ui';

export default () => {
  const show = () => {
    Toast.show('123');
  };
  const duration = () => {
    Toast.show('延时3秒', 'default', false, 0);
  };
  return (
    <>
      <Button block btnType="primary" onClick={show}>
        show toast
      </Button>
      <Button block btnType="primary" onClick={duration}>
        duration 3s
      </Button>
    </>
  );
};
