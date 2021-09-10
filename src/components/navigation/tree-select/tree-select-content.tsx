import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { prefixCls } from '../../../util';
import {
  TreeSelectItemProps,
  TreeSelectProps,
  TreeSidebarProps,
} from './index.d';
import { TreeSelectContext } from '.';
import _ from 'lodash';
import { Icon } from '../../..';

const TreeSelectContentCls = prefixCls + '-tree-select-content';

interface ThreeSelectSidebarProps
  extends Partial<TreeSelectProps<TreeSidebarProps>> {}

const TreeSelectContent: React.FC<ThreeSelectSidebarProps> = (props) => {
  const context = useContext(TreeSelectContext);
  const {
    data,
    index: treeIndex,
    multiple,
    onChangeTreeItem,
    activeColor,
    inactiveColor,
  } = context;
  const selfData = data[treeIndex].children || [];
  const [activeIndex, setActiveIndex] = useState<Array<number> | null>([]);

  const handleChangeTreeItem = (item: TreeSidebarProps, index: number) => {
    if (item.disabled) return;
    if (activeIndex?.includes(index)) {
      const indexPos = activeIndex.indexOf(index);
      const activeIndexClone = _.cloneDeep(activeIndex);
      activeIndexClone.splice(indexPos, 1);
      setActiveIndex(activeIndexClone);
      props.onChangeTreeItem && props.onChangeTreeItem(item, activeIndexClone);
    } else {
      if (multiple) {
        const activeIndexClone = _.cloneDeep(activeIndex);
        activeIndexClone?.push(index);
        setActiveIndex(activeIndexClone);
        props.onChangeTreeItem &&
          props.onChangeTreeItem(item, activeIndexClone);
      } else {
        setActiveIndex([index]);
        props.onChangeTreeItem && props.onChangeTreeItem(item, index);
      }
    }
  };

  const calcCls = (item: TreeSidebarProps, index: number) => {
    const classes = classNames(`${TreeSelectContentCls}-item`, {
      [`${TreeSelectContentCls}-item-active`]: activeIndex.includes(index),
      [`${TreeSelectContentCls}-item-disabled`]: item.disabled,
    });
    return classes;
  };

  const itemStyle = (index) => {
    if (activeColor || inactiveColor) {
      return {
        color: activeIndex.includes(index)
          ? activeColor
          : inactiveColor
          ? inactiveColor
          : '',
      };
    }
    return {};
  };

  const renderChildren = () => {
    return selfData.map((item, index) => {
      const renderIcon = (index) => {
        return activeIndex.includes(index) ? <Icon icon="check"></Icon> : '';
      };
      return (
        <li
          className={calcCls(item, index)}
          style={itemStyle(index)}
          onClick={handleChangeTreeItem.bind(undefined, item, index)}
          key={index}
        >
          <span>{item.label}</span>
          <span>{renderIcon(index)}</span>
        </li>
      );
    });
  };

  return <ul className={TreeSelectContentCls}>{renderChildren()}</ul>;
};
TreeSelectContent.displayName = 'ThreeSelectItem';

export default TreeSelectContent;
