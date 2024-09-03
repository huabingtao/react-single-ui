import React from 'react';
import { Button } from 'react-single-ui';

export default () => {
  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Button btnType="primary">primary</Button>
      <div style={{ height: '10px' }}></div>
      <Button btnType="danger">danger</Button>
      <div style={{ height: '10px' }}></div>
      <Button btnType="link" href="www.baidu.com" target="_blank">
        link
      </Button>
      <h1 className="sn-title">自定义大小</h1>
      <Button className="ag" size="lg">
        lg按钮
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button size="sm">sm按钮</Button>
      <h1 className="sn-title">禁用的按钮</h1>
      <Button disabled>disabled</Button>
      <div style={{ height: '10px' }}></div>
      <Button btnType="danger" disabled>
        disabled
      </Button>
      <h1 className="sn-title">块状按钮</h1>
      <Button btnType="primary" block={true}>
        block
      </Button>
    </>
  );
};
