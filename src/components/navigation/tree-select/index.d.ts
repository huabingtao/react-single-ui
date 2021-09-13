import React from 'react';

export interface TreeSelectProps<T> {
  /**
   * @description 左侧选择的index
   * @default 0
   */
  index?: number;
  /**
   * @description 右侧选择的 id
   * @default []
   */
  activeId?: number | string | Array<number | string>;
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
  onChangeTreeItem?: (
    item: T,
    activeId: Array<number | string> | string | number,
  ) => void;
}

export interface TreeSelectItemProps {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface TreeSidebarProps {
  label: string;
  value: any;
  disabled?: boolean;
  children?: TreeSelectItemProps[];
}
