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
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标
import './index.less';

library.add(fas);

export type SizeProp = 'xs' | 'lg' | 'sm';

export type IconType = 'spinner' | 'circle';

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

const Loading: React.FC<ILoadingProps> = (props) => {
  const {
    children,
    type,
    textSize,
    className,
    textColor = '12px',
    color = '#000',
    size = 'lg',
  } = props;
  const classes = classnames('single-loading', className);
  const icon = type === 'spinner' ? 'spinner' : 'circle-notch';
  return (
    <div className={classes}>
      <Icon icon={icon} color={color} size={size} spin></Icon>
      <span style={{ fontSize: textSize + 'px', color: textColor }}>
        {children}
      </span>
    </div>
  );
};

Loading.defaultProps = {
  textSize: '12',
  type: 'spinner',
};
export default Loading;
