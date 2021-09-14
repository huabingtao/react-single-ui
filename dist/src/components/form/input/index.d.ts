import React from 'react';
import { BaseinputProps } from './input.d';
export interface InputItemProps extends BaseinputProps {
  className?: string;
}
declare const InputItem: React.FC<InputItemProps>;
export default InputItem;
