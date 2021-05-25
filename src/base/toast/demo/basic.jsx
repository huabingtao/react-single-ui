import React from 'react';
import { Toast, Button } from 'single-ui';

export default () => {
  const show = ()=>{
    Toast.show('123')
  }
  return (
    <>
      <Button block btnType="primary" onClick={show}>show toast</Button>
    </>
  );
};
