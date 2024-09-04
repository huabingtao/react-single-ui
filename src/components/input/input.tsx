import React from 'react';
import { useRef } from 'react';
import { InputEventHandler } from './input.d';

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onFocus' | 'onChange' | 'onBlur'
  > {
  onChange?: InputEventHandler;
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
}

const Input: React.FC<InputProps> = (props) => {
  const { onBlur, onFocus, onChange, ...restProps } = props;

  const inputRefs = useRef(null);
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onBlur && onBlur(value);
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onFocus && onFocus(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    onChange && onChange(value);
  };
  return (
    <input
      ref={inputRefs}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      {...restProps}
    />
  );
};

export default Input;
