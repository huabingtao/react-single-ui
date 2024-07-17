import React from 'react';
import { Button } from 'react-single-ui';

export default () => {
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Button btnType="primary">primary</Button>
      <div style={{ height: '10px' }}></div>
      <Button btnType="danger">danger</Button>
      <div style={{ height: '10px' }}></div>
      <Button btnType="link" href="www.baidu.com" target="_blank">
        link
      </Button>
      <h1 className="sn-title">Custom size</h1>
      <Button className="ag" size="lg">
        lg按钮
      </Button>
      <div style={{ height: '10px' }}></div>
      <Button size="sm">sm按钮</Button>
      <h1 className="sn-title">Disable</h1>
      <Button disabled>disabled</Button>
      <div style={{ height: '10px' }}></div>
      <Button btnType="danger" disabled>
        disabled
      </Button>
      <h1 className="sn-title">Block</h1>
      <Button btnType="primary" block={true}>
        block
      </Button>
    </>
  );
};
