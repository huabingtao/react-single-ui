import React from 'react';
export interface BreadcrmbItemProps {
  index?: number;
  length: number;
  separator?: string;
  inactiveColor?: string;
  activeColor?: string;
  disabled?: boolean;
  onSelect?: (selectIndex: number) => void;
}
declare const TabBarItem: React.FC<BreadcrmbItemProps>;
export default TabBarItem;
