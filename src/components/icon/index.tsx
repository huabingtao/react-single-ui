import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import { prefixCls } from '../../utils';

// 这个接口会用于文档生成，icon 属性的类型被标记为字符串 'IconProp'
export interface BaseIconProps {
  /**
   * @description icon 名称，实际支持 FontAwesome 的 IconProp 类型
   */
  icon: 'IconProp';

  /**
   * @description icon 大小
   */
  size?: FontAwesomeIconProps['size'];

  /**
   * @description icon 颜色
   */
  color?: string;
    /**
   * @className icon 的类名
   */
    className?: string;
}

// 实际运行时支持 IconProp 类型
type ActualIconProps = Omit<BaseIconProps, 'icon'> & { icon: IconProp };

// 渲染文档的 IconProp 类型
type DocumentIconProps = Omit<BaseIconProps, 'icon'> & { icon: IconProp };

const Icon: React.FC<FontAwesomeIconProps> = (props) => {
  const { className, icon, ...restProps } = props;
  const classes = classNames(`${prefixCls}-icon`, className);
  return <FontAwesomeIcon icon={icon} className={classes} {...restProps} />;
};

// 用于生成文档的 Icon 组件，仅暴露给文档系统使用
const DocumentIcon: React.FC<FontAwesomeIconProps> = (props) => {
  // 这里不会渲染实际的图标，而是用于生成 API 文档
  return <Icon {...(props as unknown as FontAwesomeIconProps)} />;
};

export {DocumentIcon}


export default Icon;
