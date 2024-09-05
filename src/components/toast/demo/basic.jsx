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
    Toast.show('noMask', '', false, 0, false);
  };
  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Button block btnType="primary" onClick={show}>
        基础的 Toast
      </Button>

      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={showInfo}>
        信息 Toast
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={showSuccess}>
        成功
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="danger" onClick={showFail}>
        失败
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={showLoading}>
        加载状态
      </Button>
      <h1 className="sn-title">永远展示</h1>
      <Button block btnType="primary" onClick={alowaysShow}>
        打开不会自动关闭的 Toast
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={hidden}>
        手动关闭Toast
      </Button>
      <h1 className="sn-title">延时关闭</h1>
      <Button block btnType="primary" onClick={duration}>
        持续3s后自动关闭
      </Button>
      <h1 className="sn-title">关闭后回调</h1>
      <Button block btnType="primary" onClick={haveOnClose}>
        持续3s后自动关闭并执行alert函数
      </Button>
      <h1 className="sn-title">隐藏蒙层</h1>
      <Button block btnType="primary" onClick={noMask}>
        没有隐藏蒙层
      </Button>
    </>
  );
};
