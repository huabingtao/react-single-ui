import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../utils';
import { BreadcrumbItemProps } from './breadcrumb-item';

export interface BreadcrumbProps {
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
  /**
   * @description 子元素
   */
  children: React.ReactNode;
}

interface IBreadcrumbContext {
  index?: number;
  length: number;
  separator?: string;
  inactiveColor?: string;
  activeColor?: string;
  disabled?: boolean;
  onSelect?: (selectIndex: number) => void;
}

export const BreadcrumbContext = createContext<IBreadcrumbContext>({ length: 0 });

const BreadcrumbPrefixCls = prefixCls + '-breadcrmb';

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  const { separator, children, inactiveColor, activeColor, onSelect } = props;

  const handleSelect = (index: number) => {
    if(onSelect){
      onSelect(index)
    }
    // onSelect && onSelect(index);
  };

  const breadcrmbContextContent: IBreadcrumbContext = {
    length: (children as [])?.length || 0,
    separator: '/',
    inactiveColor,
    activeColor,
    onSelect: handleSelect,
  };
  const classes = classNames(BreadcrumbPrefixCls);
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<BreadcrumbItemProps>;
      if (childElement.type.displayName === 'TabBarItem') {
        return React.cloneElement(childElement, { index });
      } else {
        console.error(
          'Warning: Breadcrumb has a child which is not BreadcrumbItem',
        );
      }
    });
  };
  return (
    <ul className={classes}>
      <BreadcrumbContext.Provider value={breadcrmbContextContent}>
        {renderChildren()}
      </BreadcrumbContext.Provider>
    </ul>
  );
};


export default Breadcrumb;
