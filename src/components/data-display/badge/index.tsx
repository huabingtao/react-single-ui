import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../../util';

export type SizeProps = 'sm' | 'lg';

export interface BadegProps {
  color: string;
  dot: boolean;
  max: number;
  content: React.ReactElement | number;
  size: SizeProps;
  fixed: boolean;
  style: React.CSSProperties;
}

const BadgePrefixCls = prefixCls + '-badge';

const Badge: React.FC<BadegProps> = (props) => {
  let {
    children,
    color,
    dot = false,
    max = 99,
    content,
    size,
    fixed,
    style,
    ...restProps
  } = props;

  const styleObj = {
    backgroundColor: color,
    ...style,
  };

  if (content) {
    content = Number(content) ? Number(content) : content;
  }

  const renderContent = () => {
    if (dot) return '';
    return typeof content === 'number' && content > max ? `${max}+` : content;
  };

  const dotWrapCls = classNames(`${BadgePrefixCls}-wrap`);

  const dotCls = classNames(BadgePrefixCls, {
    [`${BadgePrefixCls}-dot-large`]: dot && size === 'sm',
    [`${BadgePrefixCls}-fixed`]: typeof content === 'number' || fixed || dot,
    [`${BadgePrefixCls}-dot`]: dot,
  });

  return (
    <div className={dotWrapCls}>
      {children}
      {(content || dot) && (
        <sup className={dotCls} style={{ ...styleObj }} {...restProps}>
          {renderContent()}
        </sup>
      )}
    </div>
  );
};

export default Badge;
