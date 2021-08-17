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
import { prefixCls } from '../../../util';

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
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  block?: boolean;
  activeClassName?: string;
  style?: object;
}
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    block,
    disabled = false,
    size,
    children,
    className,
    href,
    activeClassName,
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
    <TouchFeedback activeClassName={`${buttonPrefixCls}-active`}>
      <button className={classes} {...restProps} disabled={disabled}>
        {children}
      </button>
    </TouchFeedback>
    // <button className={classes} disabled={disabled} {...restProps}>
    //   {children}
    // </button>
  );
};

Button.defaultProps = {
  disabled: false,
  block: false,
  btnType: ButtonType.Default,
};

export default Button;
