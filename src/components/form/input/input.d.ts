import React from 'react';
export type InputEventHandler = (value?: string) => void;
export interface BaseinputProps {
  type?: 'text' | 'phone' | 'number' | 'password' | 'digit';
  value?: string;
  placeholder: string;
  label?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  clearble?: boolean;
  maxLength?: number;
  defaultValue?: string;
  onChange?: InputEventHandler;
  onFocus?: InputEventHandler;
  onBlur?: InputEventHandler;
  onClear?: InputEventHandler;
}
