import React from 'react';
import { Button } from 'single-ui';

export default () => {
  return (
    <>
      <h1 className="sn-title">按钮类型</h1>
      <Button btnType="primary">primary</Button>
      <Button btnType="danger">danger</Button>
      <Button btnType="link" href="www.baidu.com" target="_blank">
        link
      </Button>

      <h1 className="sn-title">按钮大小</h1>
      <Button className="ag" size="lg">
        lg按钮
      </Button>
      <Button size="sm">sm按钮</Button>
      <h1 className="sn-title">禁用状态</h1>
      <Button disabled>disabled</Button>
      <Button btnType="danger" disabled>
        disabled
      </Button>
      <h1 className="sn-title">块状</h1>
      <Button btnType="primary" block={true}>
        block
      </Button>
    </>
  );
};
