import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { prefixCls } from '../../utils';
import {
  TreeSelectItemProps,
  TreeSelectProps,
  TreeSidebarProps,
} from './index.d';
import { TreeSelectContext } from '.';
import _ from 'lodash';
import { Icon } from '../..';

const TreeSelectContentCls = prefixCls + '-tree-select-content';

const TreeSelectContent: React.FC<Partial<TreeSidebarProps>> = (props) => {
  const context = useContext(TreeSelectContext);
  const {
    data,
    index = 0,
    activeId,
    multiple,
    onChangeTreeItem,
    activeColor,
    inactiveColor,
  } = context;
  let selfData: any = [];
  if (data && data[index] && data[index].children) {
    selfData = data[index].children;
  }

  const [childActiveId, setActiveId] = useState(
    activeId as Array<number | string>,
  );
  const handleChangeTreeItem = (item: TreeSidebarProps, index: number) => {
    if (item.disabled) return;
    const v = item.value;
    if (childActiveId?.includes(v)) {
      const indexPos = childActiveId.indexOf(v);
      const childActiveIdClone = _.cloneDeep(childActiveId);
      childActiveIdClone.splice(indexPos, 1);
      setActiveId(childActiveIdClone);
      onChangeTreeItem && onChangeTreeItem(item, childActiveIdClone);
    } else {
      if (multiple) {
        const childActiveIdClone = _.cloneDeep(childActiveId);
        childActiveIdClone?.push(v);
        setActiveId(childActiveIdClone);
        onChangeTreeItem && onChangeTreeItem(item, childActiveIdClone);
      } else {
        setActiveId([v]);
        onChangeTreeItem && onChangeTreeItem(item, v);
      }
    }
  };

  const calcCls = (item: TreeSidebarProps, index: number) => {
    const classes = classNames(`${TreeSelectContentCls}-item`, {
      [`${TreeSelectContentCls}-item-active`]: childActiveId.includes(
        item.value,
      ),
      [`${TreeSelectContentCls}-item-disabled`]: item.disabled,
    });
    return classes;
  };

  const itemStyle = (value: string | number) => {
    if (activeColor || inactiveColor) {
      return {
        color: childActiveId.includes(value)
          ? activeColor
          : inactiveColor
          ? inactiveColor
          : '',
      };
    }
    return {};
  };

  const renderChildren = () => {
    return selfData.map((item: TreeSelectItemProps, index: number) => {
      const renderIcon = (item: TreeSelectItemProps) => {
        return childActiveId.includes(item.value) ? (
          <Icon icon="check"></Icon>
        ) : (
          ''
        );
      };
      return (
        <li
          className={calcCls(item, index)}
          style={itemStyle(item.value)}
          onClick={handleChangeTreeItem.bind(undefined, item, index)}
          key={index}
        >
          <span>{item.label}</span>
          <span>{renderIcon(item)}</span>
        </li>
      );
    });
  };

  return <ul className={TreeSelectContentCls}>{renderChildren()}</ul>;
};
TreeSelectContent.displayName = 'TreeSelectItem';

export default TreeSelectContent;
