import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../../util';
import {
  TreeSelectProps,
  TreeSelectItemProps,
  TreeSidebarProps,
} from './index.d';
import { TreeSelectContext } from '.';

const TreeSelectCls = prefixCls + '-tree-select';

const TreeSelectSidebar: React.FC<Partial<TreeSidebarProps>> = () => {
  const context = useContext(TreeSelectContext);
  const { data, index, onChangeTree, activeColor } = context;
  const [treeIndex, setTreeIndex] = useState(index || 0);

  const handleChangeTree = (item: TreeSidebarProps, index) => {
    if (item.disabled) return;
    setTreeIndex(index);
    onChangeTree && onChangeTree(item, index);
  };

  const calcCls = (item: TreeSidebarProps, index) => {
    return classNames(`${TreeSelectCls}-sidebar-item`, {
      [`${TreeSelectCls}-sidebar-item-active`]: treeIndex === index,
      [`${TreeSelectCls}-sidebar-item-disabled`]: item.disabled,
    });
  };

  const itemStyle = (index) => {
    return {
      backgroundColor: activeColor
        ? index === treeIndex
          ? activeColor
          : ''
        : '',
    };
  };

  const renderChildren = () => {
    if (!data.length) {
      console.warn('The data is not a Array or the length of the data is 0');
      return '';
    }
    return data.map((treeItem, index) => {
      return (
        <li
          key={index}
          onClick={handleChangeTree.bind(this, treeItem, index)}
          className={calcCls(treeItem, index)}
        >
          <span
            style={itemStyle(index)}
            className={`${TreeSelectCls}-sidebar-item-line`}
          ></span>
          {treeItem.label}
        </li>
      );
    });
  };
  return <ul className={`${TreeSelectCls}-sidebar`}>{renderChildren()}</ul>;
};

TreeSelectSidebar.defaultProps = {};

export default TreeSelectSidebar;
