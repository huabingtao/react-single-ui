import React from 'react';
import { Button } from 'single-ui';

export default () => {
  return (
    <>
      <h1 className="single-title">default</h1>
      <Button className="ag" size="lg">
        lg按钮
      </Button>
      <Button size="sm">sm按钮</Button>
      <Button btnType="primary">primary</Button>
      <Button btnType="danger">danger</Button>
      <Button disabled>disabled</Button>
      <Button btnType="link" href="www.baidu.com" target="_blank">
        link
      </Button>
      <Button btnType="primary" block={true}>
        block
      </Button>

      <h1 className="single-title">自定义样式</h1>
    </>
  );
};
