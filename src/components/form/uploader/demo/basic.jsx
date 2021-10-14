import React, { useState } from 'react';
import { Uploader } from 'single-ui';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Uploader
        multiple={true}
        maxCount={4}
        deletable
        maxSize={600 * 1024}
      ></Uploader>
    </>
  );
};
