import classNames from 'classnames';
import React, { useContext, useState } from 'react';

import { TreeSelectContext } from '.';
import { prefixCls } from '../../utils';
import { TreeSidebarProps } from './index.d';

const TreeSelectCls = prefixCls + '-tree-select';

const TreeSelectSidebar: React.FC<Partial<TreeSidebarProps>> = () => {
  const context = useContext(TreeSelectContext);
  const { data, index = 0, onChangeTree, activeColor } = context;
  const [treeIndex, setTreeIndex] = useState(index);

  const handleChangeTree = (item: TreeSidebarProps, index: number) => {
    if (item.disabled) return;
    setTreeIndex(index);
    onChangeTree && onChangeTree(item, index);
  };

  const calcCls = (item: TreeSidebarProps, index: number) => {
    return classNames(`${TreeSelectCls}-sidebar-item`, {
      [`${TreeSelectCls}-sidebar-item-active`]: treeIndex === index,
      [`${TreeSelectCls}-sidebar-item-disabled`]: item.disabled,
    });
  };

  const itemStyle = (index: number) => {
    return {
      backgroundColor: activeColor
        ? index === treeIndex
          ? activeColor
          : ''
        : '',
    };
  };

  const renderChildren = () => {
    if (!data || !data.length) {
      console.warn('The data is not a Array or the length of the data is 0');
      return '';
    }
    return data.map((treeItem, index: number) => {
      return (
        <li
          key={index}
          onClick={handleChangeTree.bind(undefined, treeItem, index)}
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

export default TreeSelectSidebar;
