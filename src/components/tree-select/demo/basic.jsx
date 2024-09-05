import React from 'react';
import { TreeSelect } from 'react-single-ui';
import { data } from './data';
export default () => {
  const onChangeTree = (item, index) => {
    console.log('item:', item, index);
  };
  const onChangeTreeItem = (item, activeId) => {
    console.log('treeItem:', item, activeId);
  };

  return (
    <>
      <h1 className="sn-title">基础用法</h1>
      <TreeSelect data={data} onChangeTree={onChangeTree}></TreeSelect>
      <h1 className="sn-title">多选</h1>
      <TreeSelect
        data={data}
        multiple
        onChangeTreeItem={onChangeTreeItem}
      ></TreeSelect>
      <h1 className="sn-title">自定义样式</h1>
      <TreeSelect activeColor="#ee0a24" data={data} multiple></TreeSelect>
    </>
  );
};
