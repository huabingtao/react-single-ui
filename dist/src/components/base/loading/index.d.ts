import React from 'react';
export declare type SizeProp = 'xs' | 'lg' | 'sm';
export declare type IconType = 'spinner' | 'circle';
interface ILoadingProps {
  /**
   * @description  icon 颜色
   * @default 黑色
   */
  color?: string;
  /**
   * @description  图标类型 接受 'spinner' | 'circle' 两种类型的图标
   * @default spinner
   */
  type?: IconType;
  /**
   * @description  图标大小 接受 'xs' | 'lg' | 'sm' 三种类型
   * @default sm
   */
  size?: SizeProp;
  /**
   * @description  字体大小单位 px
   * @default 12px
   */
  textSize?: string;
  /**
   * @description  字体颜色
   * @default  黑色
   */
  textColor?: string;
  /**
   * @description  传入类名
   */
  className?: string;
}
declare const Loading: React.FC<ILoadingProps>;
export default Loading;
