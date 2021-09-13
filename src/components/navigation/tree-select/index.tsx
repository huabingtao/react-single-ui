import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../../util';
import TreeSelectSidebar from './tree-select-sidebar';
import { TreeSelectProps, TreeSidebarProps } from './index.d';
import TreeSelectContent from './tree-select-content';

export const TreeSelectContext = createContext<
  TreeSelectProps<TreeSidebarProps>
>({ multiple: false, data: [] });
const TreeSelectCls = prefixCls + '-tree-select';

const TreeSelect: React.FC<TreeSelectProps<TreeSidebarProps>> = (props) => {
  const {
    data,
    onChangeTree,
    onChangeTreeItem,
    inactiveColor,
    activeColor,
    index = 0,
    activeId = [],
    multiple,
    height = '300px',
  } = props;
  const [treeIndex, setTreeIndex] = useState(index || 0);
  const handleChangeTreeItem = (
    item: TreeSidebarProps,
    activeId?: Array<number | string> | string | number,
  ) => {
    onChangeTreeItem && onChangeTreeItem(item, activeId);
  };

  const handleChangeTree = (item: TreeSidebarProps, index: number) => {
    setTreeIndex(index);
    onChangeTree && onChangeTree(item, index);
  };

  const treeSelectContent: TreeSelectProps<TreeSidebarProps> = {
    inactiveColor,
    activeColor,
    data,
    multiple,
    onChangeTreeItem: handleChangeTreeItem,
    onChangeTree: handleChangeTree,
    index: treeIndex,
    activeId: Array.isArray(activeId) ? activeId : [activeId],
  };

  return (
    <div className={TreeSelectCls} style={{ height: height as string }}>
      <TreeSelectContext.Provider value={treeSelectContent}>
        <TreeSelectSidebar></TreeSelectSidebar>
        <TreeSelectContent></TreeSelectContent>
      </TreeSelectContext.Provider>
    </div>
  );
};

TreeSelect.defaultProps = {};

export default TreeSelect;
