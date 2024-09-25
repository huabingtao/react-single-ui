import React, { createContext, useState } from 'react';
import { prefixCls } from '../../utils';
import { TreeSelectProps, TreeSidebarProps } from './index.d';
import TreeSelectContent from './tree-select-content';
import TreeSelectSidebar from './tree-select-sidebar';

export const TreeSelectContext = createContext<
  TreeSelectProps<TreeSidebarProps>
>({ multiple: false, index: 0 });
const TreeSelectCls = prefixCls + '-tree-select';

const TreeSelect: React.FC<TreeSelectProps<TreeSidebarProps>> = (props) => {
  const {
    data = [],
    onChangeTree,
    onChangeTreeItem,
    inactiveColor,
    activeColor,
    index = 0,
    activeId = [],
    multiple,
    height = '300px',
  } = props;
  const [treeIndex = index, setTreeIndex] = useState(index);
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

export default TreeSelect;
