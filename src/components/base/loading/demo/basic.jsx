import React from 'react';
import { Loading } from 'react-single-ui';

export default () => {
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Loading size="3x" color="#0094ff"></Loading>
      <h1 className="sn-title">Add title</h1>
      <Loading
        type="circle-notch"
        size="3x"
        color="#0094ff"
        textColor="#0094ff"
      >
        Loading...
      </Loading>
    </>
  );
};
