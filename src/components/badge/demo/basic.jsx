import React from 'react';
import { Badge, Icon } from 'react-single-ui';
import { faCoffee, faBan, faBell } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCoffee, faBan, faBell);
export default () => {
  const style = {
    width: '40px',
    height: '40px',
    background: '#f2f3f5',
    borderRadius: '4px',
  };
  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Badge content="5">
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge content="hot" fixed={true}>
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge content="hot" dot={true}>
        <div style={style}></div>
      </Badge>
      <h1 className="sn-title">限制数量</h1>
      <Badge content="1000" max={10}>
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge content="1000" max={50}>
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge content="1000" max={100}>
        <div style={style}></div>
      </Badge>
      <h1 className="sn-title">自定义样式</h1>
      <Badge content="2" color="#0d6efd">
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge content="hot" fixed={true} color="#0d6efd">
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge dot fixed color="#0d6efd">
        <div style={style}></div>
      </Badge>
      <h1 className="sn-title">自定义内容</h1>
      <Badge content={<Icon icon="coffee" color="#fff" />} fixed={true}>
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge content={<Icon icon="ban" color="#fff" />} fixed={true}>
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge content={<Icon icon="bell" color="#fff" />} fixed={true}>
        <div style={style}></div>
      </Badge>
      <h1 className="sn-title">显示文字</h1>
      <Badge content="减" />
      <Badge content="惠" style={{ marginLeft: 12 }} />
      <Badge content="免" style={{ marginLeft: 12 }} />
      <Badge content="反" style={{ marginLeft: 12 }} />
      <Badge
        content={<Icon icon="battery-three-quarters" color="#fff" />}
        style={{ marginLeft: 12 }}
      />
      <h1 className="sn-title">自定义点大小</h1>
      <Badge dot size="sm">
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge dot size="lg">
        <div style={style}></div>
      </Badge>
    </>
  );
};
