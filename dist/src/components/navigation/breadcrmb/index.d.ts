import React from 'react';
export interface BreadcrmbProps {
  /**
   * @description 分隔符
   * @default "/"
   */
  separator?: string;
  /**
   * @description 未激活字体颜色
   */
  inactiveColor?: string;
  /**
   * @description 激活字体颜色
   */
  activeColor?: string;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 选择事件
   */
  onSelect?: (selectIndex: number) => void;
}
interface IBreadcrmbContext {
  index?: number;
  length: number;
  separator?: string;
  inactiveColor?: string;
  activeColor?: string;
  disabled?: boolean;
  onSelect?: (selectIndex: number) => void;
}
export declare const BreadcrmbContext: React.Context<IBreadcrmbContext>;
declare const Breadcrmb: React.FC<BreadcrmbProps>;
export default Breadcrmb;
