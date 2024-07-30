import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { prefixCls } from '../../utils';
import { BreadcrumbContext } from '.';

export interface BreadcrumbItemProps {
  /**
   * 索引
   * @description 面包屑项的索引
   */
  index?: number;

  /**
   * 长度
   * @description 面包屑项的总长度
   */
  length: number;

  /**
   * 分隔符
   * @description 面包屑项之间的分隔符
   */
  separator?: string;

  /**
   * 未激活颜色
   * @description 未激活状态的颜色
   */
  inactiveColor?: string;

  /**
   * 激活颜色
   * @description 激活状态的颜色
   */
  activeColor?: string;

  /**
   * 是否禁用
   * @description 是否禁用面包屑项
   * @default false
   */
  disabled?: boolean;

  /**
   * 选择事件
   * @description 选择面包屑项时的回调函数
   * @param selectIndex 选中的索引
   */
  onSelect?: (selectIndex: number) => void;

  /**
   * 子元素
   * @description 包裹的子元素
   */
  children: React.ReactNode;
}


const TabBarItemPrefixCls = prefixCls + '-breadcrmb-item';

const TabBarItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { index, disabled, children } = props;
  const classes = classNames(TabBarItemPrefixCls, {
    [`${TabBarItemPrefixCls}-disabled`]: disabled,
  });
  const context = useContext(BreadcrumbContext);
  const handleClick = () => {
    if (disabled) return;
    if(context.onSelect){
      context.onSelect(index as number);
    }
    // context.onSelect && context.onSelect(index as number);
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
