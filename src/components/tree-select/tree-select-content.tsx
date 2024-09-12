import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { prefixCls } from '../../utils';
import { TreeSelectItemProps, TreeSidebarProps } from './index.d';
import { TreeSelectContext } from '.';
import _ from 'lodash';
import { Icon } from '../..';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCheck);

const TreeSelectContentCls = prefixCls + '-tree-select-content';

const TreeSelectContent: React.FC<Partial<TreeSidebarProps>> = () => {
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
  let selfData: TreeSelectItemProps[] = [];
  if (data && data[index] && data[index].children) {
    selfData = data[index].children;
  }

  const [childActiveId, setActiveId] = useState(
    activeId as Array<number | string>,
  );
  const handleChangeTreeItem = (item: TreeSidebarProps) => {
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

  const calcCls = (item: TreeSidebarProps) => {
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
          className={calcCls(item)}
          style={itemStyle(item.value)}
          onClick={handleChangeTreeItem.bind(undefined, item)}
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
