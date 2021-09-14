import React from 'react';
export declare type SizeProps = 'sm' | 'lg';
export interface BadegProps {
  color: string;
  dot: boolean;
  max: number;
  content: React.ReactElement | number;
  size: SizeProps;
  fixed: boolean;
  style: React.CSSProperties;
}
declare const Badge: React.FC<BadegProps>;
export default Badge;
