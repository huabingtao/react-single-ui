import React from 'react';
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
declare const Input: React.FC<InputProps>;
export default Input;
