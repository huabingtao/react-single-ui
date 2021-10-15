import React, { useState } from 'react';
import { Uploader } from 'single-ui';

export default () => {
  const [visible, setVisible] = useState(false);
  const [fileList, setFileList] = useState([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: 'uploading',
      message: '上传中...',
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: 'failed',
      message: '上传失败',
    },
  ]);
  const onOversize = (items) => {
    console.log('items:', items);
  };
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Uploader
        fileList={fileList}
        multiple={true}
        maxCount={4}
        deletable
        // maxSize={500 * 1024}
        onOversize={onOversize}
        // disabled
      ></Uploader>
    </>
  );
};
