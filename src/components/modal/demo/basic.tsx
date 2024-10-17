import React, { useState } from 'react';
import { Button, Modal } from 'react-single-ui';

export default () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  let closeFn: (() => void) | null = null;
  const show1 = () => {
    setVisible1(true);
  };
  const show2 = () => {
    setVisible2(true);
  };
  const show3 = () => {
    const { close } = Modal.alert({
      title: '标题',
      message: '这是通过 Modal.alert 的方式调用',
      footer: footer3,
    });
    closeFn = close;
  };

  const footer1 = [
    {
      text: '取消',
      onPress: () => {
        setVisible1(false);
      },
    },
    {
      text: '确认',
      onPress: () => {
        setVisible1(false);
      },
    },
  ];

  const footer2 = [
    {
      text: '取消',
      onPress: () => {
        setVisible2(false);
      },
    },
    {
      text: '确认',
      onPress: () => {
        setVisible2(false);
      },
      style: { color: '#108ee9' },
    },
  ];
  const footer3 = [
    {
      text: '取消',
      onPress: () => {
        console.log('点击取消');
        closeFn && closeFn();
      },
    },
    {
      text: '确认',
      onPress: () => {
        console.log('点击确认');
        closeFn && closeFn();
      },
      style: { color: '#108ee9' },
    },
  ];

  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Button block btnType="primary" onClick={show1}>
        基础的弹窗
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={show2}>
        自定义按钮颜色
      </Button>
      <h1 className="sn-title">函数调用</h1>
      <Button block btnType="primary" onClick={show3}>
        通过函数调用弹窗
      </Button>

      <Modal
        visible={visible1}
        title="标题"
        message="代码是写出来给人看的，附带能在机器上运行"
        footer={footer1}
      ></Modal>
      <Modal
        visible={visible2}
        title="标题"
        message="代码是写出来给人看的，附带能在机器上运行"
        footer={footer2}
      ></Modal>
    </>
  );
};
