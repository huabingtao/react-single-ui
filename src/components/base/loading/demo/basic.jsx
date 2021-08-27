import React from 'react';
import { Loading } from 'single-ui';

export default () => {
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Loading></Loading>
      <h1 className="sn-title">Add title</h1>
      <Loading type="circle-notch" color="#0094ff" textColor="#0094ff">
        Loading...
      </Loading>
    </>
  );
};
