import React, { useState } from 'react';
import { Uploader } from 'react-single-ui';

export default () => {
  const [fileList] = useState([
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
  const [fileList1] = useState([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: '',
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: '',
    },
  ]);
  const [fileList2] = useState([
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
        console.log('第二条返回false则无法删除');
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
    return false;
  };

  const onRemove = (item) => {
    console.log('item:', item);
  };

  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <Uploader
        multiple={true}
        onOversize={onOversize}
        deletable
        onChange={onChange}
      ></Uploader>
      <h1 className="sn-title">带文件上传</h1>
      <Uploader
        multiple={true}
        onOversize={onOversize}
        deletable
        action="https://jsonplaceholder.typicode.com/posts"
        customFileName="file"
        onChange={onChange}
      ></Uploader>
      <h1 className="sn-title">上传前回调函数</h1>
      <Uploader
        multiple={true}
        onOversize={onOversize}
        deletable
        onChange={onChange}
        beforeUpload={beforeUpload}
      ></Uploader>
      <h1 className="sn-title">删除前回调函数</h1>
      <Uploader
        fileList={fileList2}
        multiple={true}
        onOversize={onOversize}
        deletable
        onChange={onChange}
      ></Uploader>
      <h1 className="sn-title">删除回调</h1>
      <Uploader
        fileList={fileList}
        multiple={true}
        deletable
        onRemove={onRemove}
      ></Uploader>
      <h1 className="sn-title">上传状态</h1>
      <Uploader
        fileList={fileList}
        multiple={true}
        deletable
        onOversize={onOversize}
      ></Uploader>
      <h1 className="sn-title">限制数量</h1>
      <Uploader
        fileList={fileList1}
        multiple={true}
        maxCount={4}
        deletable
        onOversize={onOversize}
      ></Uploader>
      <h1 className="sn-title">限制大小</h1>
      <Uploader
        fileList={fileList1}
        multiple={true}
        deletable
        maxSize={500 * 1024}
        onOversize={onOversize}
      ></Uploader>
      <h1 className="sn-title">禁用状态</h1>
      <Uploader fileList={fileList1} multiple={true} disabled></Uploader>
    </>
  );
};
