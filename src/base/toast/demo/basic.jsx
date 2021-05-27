import React from 'react';
import { Toast, Button } from 'single-ui';
import { Toast as AToast } from 'antd-mobile';

export default () => {
  const show = () => {
    Toast.show('text only');
  };
  const duration = () => {
    Toast.show('延时3秒', 'default', false, 3);
  };
  const antShow = () => {
    AToast.show('ant-toast', 1);
  }
  const haveOnClose = () => {
    Toast.show('延时3秒后关闭，执行回调函数', 'default', false, 3, ()=>{
        alert('Toast Closed!')
    });
  }
  return (
    <>
      <Button block btnType="primary" onClick={show}>
        text only
      </Button>
      <Button block btnType="primary" onClick={duration}>
        duration 3s
      </Button>
      <Button block btnType="primary" onClick={haveOnClose}>
        3s onClose callBack
      </Button>
      {/* <Button onClick={antShow}>
          Antd Toast
      </Button> */}
    </>
  );
};
