import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { prefixCls } from '../../../util';
import { MenuContext } from '.';

interface TabBarItemProps {
  index: number;
  icon: string;
  inactiveIcon: React.ReactElement;
  activeIcon: React.ReactElement;
  badge: number;
  dot: boolean;
  title: string;
  key: string;
  onPress: (selectIndex: number) => void;
}

const TabBarItemPrefixCls = prefixCls + '-tabbar-item';

const TabBarItem: React.FC<TabBarItemProps> = (props) => {
  const {
    index,
    icon,
    inactiveIcon,
    activeIcon,
    badge,
    dot,
    title,
    key,
    onPress,
    children,
  } = props;
  const classes = classNames(TabBarItemPrefixCls, {});
  const context = useContext(MenuContext);
  const handleClick = () => {
    context.onSelect && context.onSelect(index);
  };

  return (
    <li className={classes} onClick={handleClick}>
      {children}
    </li>
  );
};

export default TabBarItem;
