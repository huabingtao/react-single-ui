import React from 'React';
import { render, screen } from '@testing-library/react';
import Icon, { IconProps } from './index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // 全部图标

library.add(fas as any);

describe('test Icon component', () => {
  it('shoud render the correct default Icon', () => {
    const { container } = render(<Icon color="#169be8" icon="coffee" />);
    const element = container.getElementsByClassName('sn-icon')[0];
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('svg');
    expect(element).toHaveClass('fa-coffee sn-icon');
  });
});
