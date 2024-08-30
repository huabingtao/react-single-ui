import { render } from '@testing-library/react';
import Loading, { LoadingProps } from './index';
import React from 'react';

const testProps: LoadingProps = {
  type: 'circle-notch',
  color: '#000',
  size: '3x',
  textColor: '#000',
  textSize: '14px',
  className: 'test-loading',
};

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
  it('should render correct loading with props', () => {
    const { container } = render(<Loading {...testProps}></Loading>);
    const loadingElement = container.querySelector('.sn-loading');
    expect(loadingElement).toBeInTheDocument();
    const iconElement = container.querySelector('svg');
    expect(iconElement?.getAttribute('data-icon')).toBe('circle-notch');
    expect(iconElement).toHaveClass('fa-circle-notch fa-spin');
    expect(iconElement?.getAttribute('color')).toBe('#000');
  });
});
