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

interface ThreeSelectSidebarProps
  extends Partial<TreeSelectProps<TreeSidebarProps>> {}

const TreeSelectCls = prefixCls + '-tree-select';

const ThreeSelectSidebar: React.FC<ThreeSelectSidebarProps> = () => {
  const context = useContext(TreeSelectContext);
  const {
    data,
    index,
    onChangeTree,
    onChangeTreeItem,
    inactiveColor,
    activeColor,
  } = context;
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

  const renderChildren = () => {
    if (!data.length) {
      console.warn('data is not a Array or data length is 0');
      return '';
    }
    return data.map((threeItem, index) => {
      return (
        <li
          key={index}
          onClick={handleChangeTree.bind(this, threeItem, index)}
          className={calcCls(threeItem, index)}
        >
          {threeItem.label}
        </li>
      );
    });
  };
  return <ul className={`${TreeSelectCls}-sidebar`}>{renderChildren()}</ul>;
};

ThreeSelectSidebar.defaultProps = {};

export default ThreeSelectSidebar;
