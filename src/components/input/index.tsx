import classNames from 'classnames';
import React, { useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Icon from '../../components/icon';
import { prefixCls } from '../../utils';
import Input from './input';
import { BaseInputProps } from './input.d';
library.add(faTimesCircle);

const caculType = (type: string) => {
  let resType = '';
  switch (type) {
    case 'tel':
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

export interface InputItemProps extends BaseInputProps {
  /**
   *
   * @description 自定义输入框的类名
   */
  className?: string;
}

const InputPrefixCls = prefixCls + '-input';

const InputItem: React.FC<InputItemProps> = (props) => {
  const {
    type = 'text',
    maxLength,
    label,
    required = false,
    disabled = false,
    readonly = false,
    clearble = false,
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
    if (type === 'tel') {
      value = value?.replace(/\D/g, '') || '';
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
  const renderMaxLengthNotice = () => {
    const curNum = inValue?.length || 0;
    return maxLength ? (
      <div className={`${prefixCls}-input-max-length`}>
        {curNum}/{maxLength}
      </div>
    ) : null;
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
        maxLength={maxLength}
        {...restProps}
      ></Input>
      {!disabled && !readonly && clearble && inValue && (
        <div className={`${prefixCls}-input-clear`} onClick={handleClear}>
          <Icon icon="times-circle"></Icon>
        </div>
      )}
      {renderMaxLengthNotice()}
    </div>
  );
};

export default InputItem;
