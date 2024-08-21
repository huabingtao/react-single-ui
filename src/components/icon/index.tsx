import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import { prefixCls } from '../../utils';

// 使用的时候有props智能提示
// api 只有部分显示，icon下的类型为'IconProp' 字符串
export type ActualIconProps = Pick<
  Omit<FontAwesomeIconProps, 'icon'> & { icon: 'IconProps' | IconProp },
  'icon' | 'size' | 'color' | 'className' | 'spin'
>;

const Icon: React.FC<ActualIconProps> = (props) => {
  const { className, icon, ...restProps } = props;
  // 将 'IconProps' 断言为 IconProp
  const iconProp: IconProp = icon as IconProp;
  const classes = classNames(`${prefixCls}-icon`, className);
  return <FontAwesomeIcon icon={iconProp} className={classes} {...restProps} />;
};

export default Icon;
