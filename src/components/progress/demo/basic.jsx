import React from 'react';
import { Progress } from 'react-single-ui';

export default () => {
  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Progress percent={20}></Progress>
      <h1 className="sn-title">自定义样式</h1>
      <Progress percent={40} showPivot></Progress>
      <div style={{ height: '10px' }}></div>
      <Progress percent={60} unfilled></Progress>
      <div style={{ height: '10px' }}></div>
      <Progress
        percent={20}
        showPivot
        pivotColor="#fd7e14"
        color="#27364b"
      ></Progress>
      <div style={{ marginTop: '20px' }}></div>
      <Progress percent={40} showPivot wrapStyle={{ height: '8px' }}></Progress>
      <h1 className="sn-title">置灰</h1>
      <Progress percent={80} showPivot inactive></Progress>
      <Progress percent={70} fixed={true}></Progress>
    </>
  );
};
