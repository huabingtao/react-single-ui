import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../../util';

export interface TabBarProps {
  defaultIndex?: number;
  hidden?: boolean;
  barBgColor?: React.CSSProperties;
  inactiveColor?: React.CSSProperties;
  activeColor?: React.CSSProperties;
  onSelect: (selectIndex: number) => void;
}

interface IMenuContext {
  index: number;
  onSelect?: (selectIndex: number) => void;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const TabBarPrefixCls = prefixCls + '-tabbar';

const TabBar: React.FC<TabBarProps> = (props) => {
  const {
    children,
    defaultIndex,
    hidden,
    barBgColor,
    inactiveColor,
    activeColor,
    onSelect,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const handleSelect = (index: number) => {
    setActive(index);
    onSelect && onSelect(index);
  };
  const menuContextContent: IMenuContext = {
    index: currentActive,
    onSelect: handleSelect,
  };
  const classes = classNames(TabBarPrefixCls);
  return (
    <ul className={classes}>
      <MenuContext.Provider value={menuContextContent}>
        {' '}
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

export default TabBar;
