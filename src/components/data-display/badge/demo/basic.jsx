import React, { useState } from 'react';
import { Badge, Icon } from 'single-ui';

export default () => {
  const style = {
    width: '40px',
    height: '40px',
    background: '#f2f3f5',
    borderRadius: '4px',
  };
  return (
    <>
      <h1 className="sn-title">Basic</h1>
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
      <h1 className="sn-title">Max count</h1>
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
      <h1 className="sn-title">Custom color</h1>
      <Badge content="2" color="#0d6efd">
        <div style={style}></div>
      </Badge>
      <span style={{ margin: '0 6px' }}></span>
      <Badge content="hot" fixed={true} color="#0d6efd">
        <div style={style}></div>
      </Badge>
      <h1 className="sn-title">Custom content</h1>
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
      <h1 className="sn-title">Single use</h1>
      <Badge content="减" />
      <Badge content="惠" style={{ marginLeft: 12 }} />
      <Badge content="反" style={{ marginLeft: 12 }} />
      <Badge content="减" style={{ marginLeft: 12 }} />
      <Badge
        content={<Icon icon="battery-three-quarters" color="#fff" />}
        style={{ marginLeft: 12 }}
      />
    </>
  );
};
