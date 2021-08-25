import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../../util';

export interface BadegProps {}

const BadgePrefixCls = prefixCls + '-badge';

const Badge: React.FC<BadegProps> = (props) => {
  return <div>badge</div>;
};

export default Badge;
