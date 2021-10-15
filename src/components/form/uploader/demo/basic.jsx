import React, { useState } from 'react';
import { Uploader } from 'single-ui';

export default () => {
  const [visible, setVisible] = useState(false);
  const onOversize = (items) => {
    console.log('items:', items);
  };
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Uploader
        multiple={true}
        maxCount={4}
        deletable
        maxSize={500 * 1024}
        onOversize={onOversize}
        disabled
      ></Uploader>
    </>
  );
};
