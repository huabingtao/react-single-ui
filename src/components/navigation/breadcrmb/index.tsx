import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../../utils';
import { BreadcrmbItemProps } from './breadcrmb-item';

export interface BreadcrmbProps {
  /**
   * @description 分隔符
   * @default "/"
   */
  separator?: string;
  /**
   * @description 未激活字体颜色
   */
  inactiveColor?: string;
  /**
   * @description 激活字体颜色
   */
  activeColor?: string;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 选择事件
   */
  onSelect?: (selectIndex: number) => void;
}

interface IBreadcrmbContext {
  index?: number;
  length: number;
  separator?: string;
  inactiveColor?: string;
  activeColor?: string;
  disabled?: boolean;
  onSelect?: (selectIndex: number) => void;
}

export const BreadcrmbContext = createContext<IBreadcrmbContext>({ length: 0 });

const BreadcrmbPrefixCls = prefixCls + '-breadcrmb';

const Breadcrmb: React.FC<BreadcrmbProps> = (props) => {
  const { separator, children, inactiveColor, activeColor, onSelect } = props;

  const handleSelect = (index: number) => {
    onSelect && onSelect(index);
  };

  const breadcrmbContextContent: IBreadcrmbContext = {
    length: (children as [])?.length || 0,
    separator,
    inactiveColor,
    activeColor,
    onSelect: handleSelect,
  };
  const classes = classNames(BreadcrmbPrefixCls);
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<BreadcrmbItemProps>;
      if (childElement.type.displayName === 'TabBarItem') {
        return React.cloneElement(childElement, { index });
      } else {
        console.error(
          'Warning: Breadcrmb has a child which is not BreadcrmbItem',
        );
      }
    });
  };
  return (
    <ul className={classes}>
      <BreadcrmbContext.Provider value={breadcrmbContextContent}>
        {renderChildren()}
      </BreadcrmbContext.Provider>
    </ul>
  );
};

Breadcrmb.defaultProps = {
  separator: '/',
};

export default Breadcrmb;
