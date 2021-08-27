import React from 'react';
import { Progress } from 'single-ui';

export default () => {
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Progress percent={20}></Progress>
      <h1 className="sn-title">Show pivot</h1>
      <Progress percent={40} showPivot></Progress>
      <h1 className="sn-title">Unfilled</h1>
      <Progress percent={60} unfilled></Progress>
      <h1 className="sn-title">Custom style</h1>
      <Progress
        percent={20}
        showPivot
        pivotColor="#fd7e14"
        color="#fd7e14"
      ></Progress>
      <div style={{ marginTop: '20px' }}></div>
      <Progress percent={40} showPivot wrapStyle={{ height: '8px' }}></Progress>
      <h1 className="sn-title">Inactive</h1>
      <Progress percent={80} showPivot inactive></Progress>
    </>
  );
};
