import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../../util';
import TreeSelectSidebar from './tree-select-sidebar';
import {
  TreeSelectProps,
  TreeSelectItemProps,
  TreeSidebarProps,
} from './index.d';
import TreeSelectContent from './tree-select-content';

interface IThreeSelectContext<T> {
  /**
   * @description 左侧选择的index
   * @default 0
   */
  index?: number;
  /**
   * @description 高度，默认单位为px
   * @default 300px
   */
  height?: React.CSSProperties;
  /**
   * @description 分类显示所需的数据
   * @type TreeSelectProps[]
   * @default []
   */
  data?: T[];
  /**
   * @description 置灰颜色
   */
  inactiveColor?: string;
  /**
   * @description 激活颜色
   */
  activeColor?: string;
  /**
   * @description 是否设置多选
   */
  multiple: boolean;
  /**
   * @description 左侧选项点击回调函数
   */
  onChangeTree?: (item: T, index: number) => void;
  /**
   * @description 右侧选项点击回调函数
   */
  onChangeTreeItem?: (item: T, index: number) => void;
}

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
    multiple,
    height = '300px',
  } = props;
  const [treeIndex, setTreeIndex] = useState(index || 0);
  const handleChangeTreeItem = (item: TreeSidebarProps) => {
    onChangeTreeItem && onChangeTreeItem(item, index);
  };

  const handleChangeTree = (item: TreeSidebarProps, index: number) => {
    setTreeIndex(index);
    onChangeTree && onChangeTree(item, index);
  };

  const threeSelectContent: TreeSelectProps<TreeSidebarProps> = {
    inactiveColor,
    activeColor,
    data,
    multiple,
    onChangeTreeItem: handleChangeTreeItem,
    onChangeTree: handleChangeTree,
    index: treeIndex,
  };

  return (
    <div className={TreeSelectCls} style={{ height: height as string }}>
      <TreeSelectContext.Provider value={threeSelectContent}>
        <TreeSelectSidebar></TreeSelectSidebar>
        <TreeSelectContent></TreeSelectContent>
      </TreeSelectContext.Provider>
    </div>
  );
};

TreeSelect.defaultProps = {};

export default TreeSelect;
