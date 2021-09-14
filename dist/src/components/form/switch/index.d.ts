import React from 'react';
export interface SwitchProps {
  value: boolean;
  disabled: boolean;
  size: 'lg' | 'sm';
  activeColor: string;
  inactiveColor: string;
  onClick: (value: boolean) => void;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
