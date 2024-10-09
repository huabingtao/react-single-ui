import React, { useEffect, useState } from 'react';
import { Button, Toast } from 'react-single-ui';
const CountDownText = () => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount((x) => {
        if (x > 1) {
          return x - 1;
        } else {
          return x;
        }
      });
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, []);
  return <span className="inline-block w-[100px]">还剩 {count} 秒</span>;
};
export default () => {
  const show = () => {
    Toast.info({
      content: '基础的 Toast',
    });
  };
  const duration = () => {
    Toast.info({
      content: <CountDownText />,
      duration: 5,
    });
  };
  const showSuccess = () => {
    Toast.success({
      content: '成功 Toast',
    });
  };
  const showFail = () => {
    Toast.fail({
      content: '失败 Toast',
      duration: 3,
    });
  };
  const showLoading = () => {
    Toast.loading({
      content: '加载中...',
      duration: 3,
    });
  };
  const haveOnClose = () => {
    Toast.info({
      content: '延时3秒后关闭，执行回调函数',
      onAfterClose: () => {
        alert('关闭了');
      },
    });
  };
  const alowaysShow = () => {
    Toast.info({
      content: '总是显示在页面上',
      duration: 0,
      maskClickable: true,
    });
  };
  const hidden = () => {
    Toast.closeAll();
  };
  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Button block btnType="primary" onClick={show}>
        基础的 Toast
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
        持续5s后自动关闭
      </Button>
      <h1 className="sn-title">关闭后回调</h1>
      <Button block btnType="primary" onClick={haveOnClose}>
        持续3s后自动关闭并执行alert函数
      </Button>
    </>
  );
};
