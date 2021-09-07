import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../../util';
import { BaseinputProps } from './input.d';
import Input from './input';
import { Icon } from '../../..';

const caculType = (type) => {
  let resType = '';
  switch (type) {
    case 'phone':
      resType = 'tel';
      break;
    case 'password':
      resType = 'password';
      break;
    case 'digit':
      resType = 'number';
      break;
    case 'number':
      resType = 'number';
      break;
    default:
      resType = type;
  }
  return resType;
};

export interface InputItemProps extends BaseinputProps {
  className?: string;
}

const InputPrefixCls = prefixCls + '-input-wrap';

const InputItem: React.FC<InputItemProps> = (props) => {
  const {
    type = 'text',
    label,
    required = false,
    disabled = false,
    readonly = false,
    clearble = false,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    onClear,
    value,
    ...restProps
  } = props;
  const classes = classNames(`${InputPrefixCls}`, {
    [`${InputPrefixCls}-disabled`]: disabled,
    [`${InputPrefixCls}-required`]: required,
    [`${InputPrefixCls}-readonly`]: readonly,
  });

  const handleChange = (value: string) => {
    onChange && onChange(value);
  };
  const handleFocus = (value: string) => {
    onFocus && onFocus(value);
  };
  const handleBlur = (value: string) => {
    onBlur && onBlur(value);
  };
  const handleClear = () => {
    onClear && onClear();
  };

  const inputType = caculType(type);
  return (
    <div className={classes}>
      <div className={`${prefixCls}-input-label`}>{label}</div>
      <Input
        className={`${prefixCls}-input-self`}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        readOnly={readonly}
        disabled={disabled}
        type={inputType}
        value={value}
        {...restProps}
      ></Input>
      {!disabled && !readonly && clearble && value && (
        <div className={`${prefixCls}-input-clear`}>
          <Icon icon="times-circle" onClick={handleClear}></Icon>
        </div>
      )}
    </div>
  );
};

export default InputItem;
