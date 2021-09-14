import React from 'react';
export interface ProgressProps {
  /**
   * @description 进度条百分比 0~100
   */
  percent: number;
  /**
   * @description 设置为 true 将吸附到顶部
   */
  fixed: boolean;
  /**
   * @description 是否显示填充轨道默认填充
   */
  unfilled: boolean;
  /**
   * @description 进度条颜色
   */
  color: string;
  /**
   * @description 轨道颜色
   */
  trackColor: string;
  /**
   * @description 是否展示进度文字
   * @default false
   */
  showPivot: boolean;
  /**
   * @description pivote 文字
   */
  pivoteText: string;
  /**
   * @description 进度文字颜色
   */
  textColor: string;
  /**
   * @description 进度文字背景颜色
   */
  pivotColor: string;
  /**
   * @description 是否置灰
   */
  inactive: boolean;
  /**
   * @description 进度条包裹层样式
   */
  wrapStyle: React.CSSProperties;
  /**
   * @description 进度条样式
   */
  percentStyle: React.CSSProperties;
}
declare const Progress: React.FC<ProgressProps>;
export default Progress;
