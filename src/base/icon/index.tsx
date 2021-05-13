import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const Icon: React.FC<FontAwesomeIconProps> = (props) => {
    const { className, ...restProps } = props;

    const classes = classNames('hero-icon', className)

    return <FontAwesomeIcon className={classes} {...restProps}/>
}

export default Icon;