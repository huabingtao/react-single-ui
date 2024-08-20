import React from 'react';
import { Loading } from 'react-single-ui';

export default () => {
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Loading size="3x" color="#0094ff" className="mr-3"></Loading>
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
      <h1 className="sn-title">Add title</h1>
      <Loading className="mr-3" size="3x" color="#0094ff" textColor="#0094ff">
        Loading
      </Loading>
      <Loading className="mr-3" size="3x" color="#0094ff" textColor="#0094ff">
        Loading...
      </Loading>
      <Loading className="mr-3" size="3x" color="#0094ff" textColor="#0094ff">
        load
      </Loading>
      <h1 className="sn-title">Size</h1>
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
