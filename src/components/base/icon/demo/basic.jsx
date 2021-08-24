import React from 'react';
import { Icon } from 'single-ui';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标

library.add(fas);
export default () => {
  return (
    <>
      <h1 className="sn-title">default</h1>
      <Icon icon="coffee" />
      <h1 className="sn-title">自定义大小,颜色</h1>
      <Icon icon="circle-notch" color="#169be8" size="2x" theme="primary" />
      <h1 className="sn-title">添加动画</h1>
      <Icon icon="spinner" color="#169be8" size="3x" spin />
      <div style={{ height: '10px' }}></div>
      <Icon size="3x" color="#169be8" icon="spinner" pulse />
    </>
  );
};
