import React, { useState } from 'react';
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
      <h1 className="sn-title">Basic</h1>
      <TreeSelect data={data} onChangeTree={onChangeTree}></TreeSelect>
      <h1 className="sn-title">Multiple</h1>
      <TreeSelect
        data={data}
        multiple
        onChangeTreeItem={onChangeTreeItem}
      ></TreeSelect>
      <h1 className="sn-title">Custom style</h1>
      <TreeSelect activeColor="#ee0a24" data={data} multiple></TreeSelect>
    </>
  );
};
