import React from 'react';
import { Toast, Button } from 'react-single-ui';

export default () => {
  const show = () => {
    Toast.show('text only');
  };
  const duration = () => {
    Toast.show('延时3秒', 'default', false, 3);
  };
  const showInfo = () => {
    Toast.info('信息 Toast', false, 3);
  };
  const showSuccess = () => {
    Toast.success('成功 Toast', false, 3);
  };
  const showFail = () => {
    Toast.fail('失败 Toast', false, 3);
  };
  const showLoading = () => {
    Toast.loading('loading...', false, 3);
  };
  const haveOnClose = () => {
    Toast.show('延时3秒后关闭，执行回调函数', 'default', false, 3, () => {
      alert('Toast Closed!');
    });
  };
  const alowaysShow = () => {
    Toast.show('总是显示在页面上', 'default', false, 0);
  };
  const hidden = () => {
    Toast.hidden();
  };
  const noMask = () => {
    Toast.show('noMask', '', false, 3, false);
  };
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Button block btnType="primary" onClick={show}>
        Basic toast
      </Button>

      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={showInfo}>
        Info
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={showSuccess}>
        Success
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="danger" onClick={showFail}>
        Fail
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={showLoading}>
        Loading
      </Button>
      <h1 className="sn-title">Always show</h1>
      <Button block btnType="primary" onClick={alowaysShow}>
        Always show toast
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={hidden}>
        Handle hidden toast
      </Button>
      <h1 className="sn-title">Delay close</h1>
      <Button block btnType="primary" onClick={duration}>
        Duration 3s
      </Button>
      <h1 className="sn-title">CallBack close after</h1>
      <Button block btnType="primary" onClick={haveOnClose}>
        Close after 3 seconds
      </Button>
      <h1 className="sn-title">No mask</h1>
      <Button block btnType="primary" onClick={noMask}>
        No mask
      </Button>
    </>
  );
};
