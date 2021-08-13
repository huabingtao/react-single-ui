import React from 'react';
import classNames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconProps extends FontAwesomeIconProps {
  /**
   * @description  icon名称
   */
  icon: IconProp;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, icon, ...restProps } = props;
  const classes = classNames('single-icon', className);
  return <FontAwesomeIcon icon={icon} className={classes} {...restProps} />;
};

export default Icon;
