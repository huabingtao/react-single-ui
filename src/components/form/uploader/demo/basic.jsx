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
  const [fileList1, setFileList1] = useState([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: '',
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: '',
    },
  ]);
  const onOversize = (items) => {
    console.log('items:', items);
  };

  const onChange = (file, files) => {
    console.log('onChange', file, files);
  };

  const beforeUpload = (file) => {
    return true;
  };
  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Uploader
        multiple={true}
        onOversize={onOversize}
        deletable
        action="https://jsonplaceholder.typicode.com/posts"
        onChange={onChange}
        beforeUpload={beforeUpload}
      ></Uploader>
      {/* <h1 className="sn-title">Upload status</h1>
      <Uploader
        fileList={fileList}
        multiple={true}
        deletable
        onOversize={onOversize}
      ></Uploader>
      <h1 className="sn-title">Limit the number</h1>
      <Uploader
        fileList={fileList1}
        multiple={true}
        maxCount={4}
        deletable
        onOversize={onOversize}
      ></Uploader>
      <h1 className="sn-title">Limit the maxSize</h1>
      <Uploader
        fileList={fileList1}
        multiple={true}
        deletable
        maxSize={500 * 1024}
        onOversize={onOversize}
      ></Uploader>
      <h1 className="sn-title">Disabled</h1>
      <Uploader
        fileList={fileList1}
        multiple={true}
        disabled
      ></Uploader> */}
    </>
  );
};
