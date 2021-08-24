import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
// import './index.scss';

import { prefixCls } from '../../../util';

export interface SwitchProps {
  value: boolean;
  disabled: boolean;
  size: 'lg' | 'sm';
  activeColor: string;
  inactiveColor: string;
  onClick: (value: boolean) => void;
}

const SwitchPrefixCls = prefixCls + '-switch';

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    value = false,
    disabled = false,
    size,
    activeColor,
    inactiveColor,
    onClick,
    ...restRrops
  } = props;
  let checked = value;
  const handleClick = () => {
    if (disabled) return;
    checked = !value;
    props.onClick && props.onClick(checked);
  };
  const classes = classNames(`${SwitchPrefixCls}`, {
    [`${SwitchPrefixCls}-disabled`]: disabled,
    [`${SwitchPrefixCls}-active`]: checked,
    [`${SwitchPrefixCls}-${size}`]: size,
  });
  let style = null;
  if (activeColor || inactiveColor) {
    style = { backgroundColor: checked ? activeColor : inactiveColor };
  }

  return (
    <div className={classes} onClick={handleClick} style={style} {...restRrops}>
      <div className={`${SwitchPrefixCls}-round`}></div>
    </div>
  );
};

export default Switch;
