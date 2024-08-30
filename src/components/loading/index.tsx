/*
 * @Author: your name
 * @Date: 2021-05-14 23:10:58
 * @LastEditTime: 2021-05-19 22:35:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /single/src/base/loading/index.tsx
 */

import React from 'react';
import classnames from 'classnames';
import Icon from '../icon/index';
import { library, SizeProp } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faCircleNotch,
  faRotate,
} from '@fortawesome/free-solid-svg-icons'; // 全部图标
import { prefixCls } from '../../utils';
library.add(faSpinner, faCircleNotch, faRotate);

export type IconSizeProp = SizeProp;

export type IconType = 'spinner' | 'circle' | 'circle-notch';

interface LoadingProps {
  /**
   * @description  icon 颜色
   * @default 黑色
   */
  color?: string;
  /**
   * @description  图标类型 接受 'spinner' | 'circle' | 'circle-notch' 类型的图标
   * @default spinner
   */
  type?: IconType;
  /**
   * @description  图标大小 接受 IconSizeProp 类型
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
  /**
   * @description 元素
   */
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const {
    children,
    type = 'spinner',
    textSize = '12',
    className,
    textColor = '#000',
    color = '#000',
    size = 'lg',
  } = props;
  const classes = classnames(`${prefixCls}-loading`, className);
  const icon = type ? type : 'spinner';
  return (
    <div className={`${classes} inline-flex flex-col items-center`}>
      <Icon icon={icon} color={color} size={size} spin></Icon>
      <span
        className="inline-block mt-1"
        style={{ fontSize: textSize + 'px', color: textColor }}
      >
        {children}
      </span>
    </div>
  );
};

export { LoadingProps };

export default Loading;
