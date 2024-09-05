import React from 'react';
import { Loading } from 'react-single-ui';

export default () => {
  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Loading className="mr-3"></Loading>
      <Loading
        type="circle-notch"
        size="3x"
        color="#0094ff"
        className="mr-3"
      ></Loading>
      <Loading
        type="rotate"
        size="3x"
        color="#0094ff"
        className="mr-3"
      ></Loading>
      <h1 className="sn-title">包含描述信息</h1>
      <Loading className="mr-3" size="3x" color="#0094ff" textColor="#0094ff">
        客官别着急
      </Loading>
      <Loading className="mr-3" size="3x" color="#0094ff" textColor="#0094ff">
        努力加载中
      </Loading>
      <Loading className="mr-3" size="3x" color="#0094ff" textColor="#0094ff">
        Loading...
      </Loading>
      <h1 className="sn-title">尺寸</h1>
      <Loading className="mr-3" size="3x" color="#0094ff" textColor="#0094ff">
        3x
      </Loading>
      <Loading className="mr-3" size="4x" color="#0094ff" textColor="#0094ff">
        4x
      </Loading>
      <Loading className="mr-3" size="5x" color="#0094ff" textColor="#0094ff">
        5x
      </Loading>
    </>
  );
};
