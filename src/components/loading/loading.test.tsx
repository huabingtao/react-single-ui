import { render } from '@testing-library/react';
import Loading from './index';
import React from 'react';

describe('test loading components', () => {
  it('should render correct default loading', () => {
    const { container } = render(<Loading></Loading>);
    const loadingElement = container.querySelector('.sn-loading');
    expect(loadingElement).toBeInTheDocument();
    const iconElement = container.querySelector('svg');
    expect(iconElement?.getAttribute('data-icon')).toBe('spinner');
    expect(iconElement).toHaveClass('fa-spinner fa-spin');
    expect(iconElement?.getAttribute('color')).toBe('#000');
  });
});
