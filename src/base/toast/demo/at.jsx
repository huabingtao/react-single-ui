import React from 'react';
import { Toast, Button } from 'antd-mobile';

export default () => {
  const show = () => {
    Toast.show('toast', 0);
  };
  return (
    <>
      <Button onClick={show}>show toast</Button>
    </>
  );
};
