import React from 'react';
import { Toast, Button } from 'single-ui';
// import { Toast as AToast } from 'antd-mobile';

export default () => {
  const show = () => {
    Toast.show('text only');
  };
  const duration = () => {
    Toast.show('延时3秒', 'default', false, 3);
  };
  const antShow = () => {
    AToast.show('ant-toast', 0, false);
  }
  const haveOnClose = () => {
    Toast.show('延时3秒后关闭，执行回调函数', 'default', false, 3, ()=>{
        alert('Toast Closed!')
    });
  }
  const alowaysShow = () => {
    Toast.show('总是显示在页面上', 'default', false, 0);
  }
  const noMask = ()=> {
      Toast.show('noMask','',false,3,false)
  }
  return (
    <>
      {/* <Button block btnType="primary" onClick={alowaysShow}>
        always show toast
      </Button> */}
      <Button block btnType="primary" onClick={show}>
        text only
      </Button>
      <Button block btnType="primary" onClick={duration}>
        duration 3s
      </Button>
      <Button block btnType="primary" onClick={haveOnClose}>
        3s onClose callBack
      </Button>
      <Button block btnType="primary" onClick={noMask}>
        no mask
      </Button>
      {/* <Button onClick={antShow}>
          Antd Toast
      </Button> */}
    </>
  );
};
