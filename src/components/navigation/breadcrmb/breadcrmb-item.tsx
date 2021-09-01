import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { prefixCls } from '../../../util';
import { BreadcrmbContext } from '.';

export interface BreadcrmbItemProps {
  index?: number;
  length: number;
  separator?: string;
  inactiveColor?: string;
  activeColor?: string;
  disabled?: boolean;
  onSelect?: (selectIndex: number) => void;
}

const TabBarItemPrefixCls = prefixCls + '-breadcrmb-item';

const TabBarItem: React.FC<BreadcrmbItemProps> = (props) => {
  const { index, disabled, children } = props;
  const classes = classNames(TabBarItemPrefixCls, {
    [`${TabBarItemPrefixCls}-disabled`]: disabled,
  });
  const context = useContext(BreadcrmbContext);
  const handleClick = () => {
    if (disabled) return;
    context.onSelect && context.onSelect(index);
  };
  const style = {
    color:
      context.length - 1 === index
        ? context.activeColor
        : context.inactiveColor,
  };

  return (
    <li className={classes} onClick={handleClick} style={style}>
      <span className={`${TabBarItemPrefixCls}-link`}>{children}</span>
      <span className={`${TabBarItemPrefixCls}-separator`}>
        {context.length - 1 !== index && context.separator}
      </span>
    </li>
  );
};
TabBarItem.displayName = 'TabBarItem';

export default TabBarItem;
