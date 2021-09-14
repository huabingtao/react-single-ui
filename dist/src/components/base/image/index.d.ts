import React from 'react';
export declare type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down';
export interface ImageProps {
  /**
   * @description 图片链接
   */
  src: string;
  /**
   * @description 图片填充模式 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
   */
  fit?: ImageFit;
  /**
   * @description 替代文本
   */
  alt?: string;
  /**
   * @description 宽度，默认单位为px
   */
  width?: string;
  /**
   * @description 高度，默认单位为px
   */
  height?: string;
  /**
   * @description 圆角大小，默认单位为px
   */
  radius?: number;
  /**
   * @description 是否显示为圆形
   * @default false
   */
  round?: boolean;
  /**
   * @description 图片加载成功回调
   */
  onLoad?: (event?: React.FormEvent) => void;
  /**
   * @description 图片加载失败回调
   */
  onError?: (event?: React.FormEvent) => void;
  /**
   * @description 是否展示loading
   */
  showLoading?: boolean;
  /**
   * @description 是否展示加载失败
   */
  showError?: boolean;
  /**
   * @description 是否开启懒加载
   */
  lazyLoad?: boolean;
}
declare const Image: React.FC<ImageProps>;
export default Image;
