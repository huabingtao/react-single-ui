import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../utils';
import { BaseinputProps } from './input.d';
import Input from './input';
import Icon from '../../components/icon';
import { useState } from 'react';

const caculType = (type: string) => {
  let resType = '';
  switch (type) {
    case 'phone':
      resType = 'tel';
      break;
    case 'password':
      resType = 'password';
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

  const [inValue, setValue] = useState(value || '');

  useEffect(() => {
    setValue(value || '');
  }, [props.value]);

  const handleChange = (value: string | undefined) => {
    if (type === 'phone') {
      value = value?.replace(/\D/g, '');
    }
    setValue(value || '');
    onChange && onChange(value);
  };
  const handleFocus = (value: string | undefined) => {
    onFocus && onFocus(value);
  };
  const handleBlur = (value: string | undefined) => {
    onBlur && onBlur(value);
  };
  const handleClear = () => {
    setValue('');
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
        value={inValue}
        {...restProps}
      ></Input>
      {!disabled && !readonly && clearble && inValue && (
        <div className={`${prefixCls}-input-clear`}>
          <Icon icon="times-circle" onClick={handleClear}></Icon>
        </div>
      )}
    </div>
  );
};

export default InputItem;
