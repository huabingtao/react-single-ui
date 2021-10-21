import React, { useState } from 'react';
import { Uploader } from 'single-ui';

export default () => {
  const [visible, setVisible] = useState(false);
  const [fileList, setFileList] = useState([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: 'loading',
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
  const [fileList2, setFileList2] = useState([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: '',
      beforeDelete: () => {
        console.log('except beforeDelete');
        return true;
      },
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: '',
      beforeDelete: () => {
        console.log('except beforeDelete');
        return false;
      },
    },
  ]);
  const onOversize = (items) => {
    console.log('items:', items);
  };

  const onChange = (file, files) => {
    console.log('onChange', file, files);
  };

  const beforeUpload = (file) => {
    console.log('beforeUpload:', file);
    return true;
  };

  const onRemove = (item) => {
    console.log('item:', item);
  };

  return (
    <>
      <h1 className="sn-title">Basic</h1>
      <Uploader
        multiple={true}
        onOversize={onOversize}
        deletable
        onChange={onChange}
      ></Uploader>
      <h1 className="sn-title">Basic file uploader</h1>
      <Uploader
        multiple={true}
        onOversize={onOversize}
        deletable
        action="https://jsonplaceholder.typicode.com/posts"
        onChange={onChange}
      ></Uploader>
      <h1 className="sn-title">BeforeUpload</h1>
      <Uploader
        multiple={true}
        onOversize={onOversize}
        deletable
        onChange={onChange}
        beforeUpload={beforeUpload}
      ></Uploader>
      <h1 className="sn-title">BeforeDelete</h1>
      <Uploader
        fileList={fileList2}
        multiple={true}
        onOversize={onOversize}
        deletable
        onChange={onChange}
      ></Uploader>
      <h1 className="sn-title">OnRemove</h1>
      <Uploader
        fileList={fileList}
        multiple={true}
        deletable
        onRemove={onRemove}
      ></Uploader>
      <h1 className="sn-title">Upload status</h1>
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
      <Uploader fileList={fileList1} multiple={true} disabled></Uploader>
    </>
  );
};
