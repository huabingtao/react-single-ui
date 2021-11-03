import React from 'react';
import { Icon } from 'react-single-ui';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标

library.add(fas);
export default () => {
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Icon icon="coffee" size="3x" />
      <h1 className="sn-title">Custom style</h1>
      <Icon icon="circle-notch" color="#169be8" size="3x" theme="primary" />
      <h1 className="sn-title">Transform</h1>
      <Icon icon="spinner" size="3x" spin />
    </>
  );
};
