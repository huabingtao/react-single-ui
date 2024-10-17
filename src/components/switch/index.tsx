import classNames from 'classnames';
import React, { useState } from 'react';

import { prefixCls } from '../../utils';
import './_index.scss';

export interface SwitchProps {
  /**
   * @description 指示开关是处于“开”（true）还是“关”（false）状态。
   * @default false
   */
  value: boolean;
  /**
   * @description 是否被禁用。
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 开关的大小，可以是 'lg'（大）或 'sm'（小）。
   * @default 'sm'
   */
  size?: 'lg' | 'sm';
  /**
   * @description 开关处于“开”状态时的颜色。
   * @default ''
   */
  activeColor?: string;
  /**
   * @description 处于激活状态时开关里面的颜色。
   * @default ''
   */
  inactiveColor?: string;
  /**
   * @description 点击开关事件回调函数。
   */
  onClick?: (value: boolean) => void;
}

const SwitchPrefixCls = prefixCls + '-switch';

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    value = false,
    disabled = false,
    size,
    activeColor,
    inactiveColor,
    ...restRrops
  } = props;
  const [checked, setChecked] = useState(value);
  const handleClick = () => {
    if (disabled) return;
    setChecked(!checked);
    if (props.onClick) {
      props.onClick(!value);
    }
    // props.onClick && props.onClick(checked);
  };
  const classes = classNames(`${SwitchPrefixCls}`, {
    [`${SwitchPrefixCls}-disabled`]: disabled,
    [`${SwitchPrefixCls}-active`]: checked,
    [`${SwitchPrefixCls}-${size}`]: size,
  });
  let style = {};
  if (activeColor || inactiveColor) {
    style = { backgroundColor: checked ? activeColor : inactiveColor };
  }

  return (
    <div className={classes} style={style} {...restRrops} onClick={handleClick}>
      <div className={`${SwitchPrefixCls}-round`}></div>
    </div>
  );
};

export default Switch;
