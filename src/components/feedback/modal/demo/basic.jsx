import React, { useState } from 'react';
import { Modal, Button } from 'single-ui';

export default () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const show1 = () => {
    setVisible1(true);
  };
  const show2 = () => {
    setVisible2(true);
  };
  const show3 = () => {
    Modal.alert({ title: '标题', message: '函数调用', footer: footer3 });
  };
  const show4 = () => {
    Modal.alert({ title: '标题', message: '异步关闭', footer: footer4 });
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
      },
    },
    {
      text: '确认',
      onPress: () => {
        console.log('点击确认');
      },
      style: { color: '#108ee9' },
    },
  ];
  const footer4 = [
    {
      text: '取消',
      onPress: () =>
        new Promise((resolve) => {
          // Toast.info('onPress Promise', 1);
          setTimeout(resolve, 1000);
        }),
    },
    {
      text: '确认',
      onPress: () =>
        new Promise((resolve) => {
          // Toast.info('onPress Promise', 1);
          setTimeout(resolve, 1000);
        }),
      style: { color: '#108ee9' },
    },
  ];

  return (
    <>
      <h1 className="sn-title">警告弹窗</h1>
      <Button block btnType="primary" onClick={show1}>
        Alert Modal
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button block btnType="primary" onClick={show2}>
        Customed Button Color
      </Button>
      <h1 className="sn-title">函数方式</h1>
      <Button block btnType="primary" onClick={show3}>
        使用函数调用
      </Button>
      <h1 className="sn-title">异步关闭</h1>
      <Button block btnType="primary" onClick={show4}>
        Promise Modal delay 1s
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
