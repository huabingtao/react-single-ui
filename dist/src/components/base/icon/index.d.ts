import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
export interface IconProps extends FontAwesomeIconProps {
  /**
   * @description  icon名称
   */
  icon: IconProp;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
