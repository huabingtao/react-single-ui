/* eslint-disable react/button-has-type */
/*
 * @Author: your name
 * @Date: 2021-05-23 17:20:19
 * @LastEditTime: 2021-05-23 19:11:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /single/src/base/button/index.tsx
 */
import React from 'react';
import classNames from 'classnames';
import TouchFeedback from 'rmc-feedback';
import { prefixCls } from '../../utils';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  /**
   * 按钮原生的 type属性
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';
  /**
   * 额外的 CSS 类名
   * @default ""
   */
  className?: string;

  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean;

  /**
   * 按钮的大小，可选值为 'lg'（大） 或 'sm'（小）
   */
  size?: ButtonSize;

  /**
   * 按钮的类型，可选值为 'primary' | 'default' | 'danger' | 'link'
   * @default "default"
   */
  btnType?: ButtonType;

  /**
   * 按钮的子节点
   */
  children: React.ReactNode;

  /**
   * 链接按钮的 URL，若设置此值则按钮渲染为 <a> 标签
   */
  href?: string;

  /**
   * 是否为块级按钮，块级按钮会占据父容器的全部宽度
   * @default false
   */
  block?: boolean;

  /**
   * 按钮处于激活状态时的 CSS 类名
   */
  activeClassName?: string;

  /**
   * 内联样式对象
   */
  style?: React.CSSProperties;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps>;
const Button: React.FC<ButtonProps> = (props):React.ReactElement | null => {
  const {
    btnType = ButtonType.Default,
    block = false,
    disabled = false,
    size,
    children,
    className,
    href,
    activeClassName,
    type = 'button',
    ...restProps
  } = props;
  const buttonPrefixCls = prefixCls + '-btn';
  const classes = classNames(`${buttonPrefixCls}`, className, {
    [`${buttonPrefixCls}-${btnType}`]: btnType,
    [`${buttonPrefixCls}-${size}`]: size,
    [`${buttonPrefixCls}-block`]: block,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <TouchFeedback activeClassName={`${buttonPrefixCls}-active ${activeClassName}`}>
      <button className={classes} type={type} {...restProps} disabled={disabled}>
        {children}
      </button>
    </TouchFeedback>
    // <button className={classes} disabled={disabled} {...restProps}>
    //   {children}
    // </button>
  );
};

// 使用 Pick 选择 BaseButtonProps 属性生成文档
type DocumentedButtonProps = Pick<ButtonProps, keyof BaseButtonProps>;

const DocumentedButton: React.FC<DocumentedButtonProps> = Button;
export { DocumentedButton };

export default Button;
