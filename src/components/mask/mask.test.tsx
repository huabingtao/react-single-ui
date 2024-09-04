import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Mask from './index';
import { prefixCls } from '../../utils';

afterEach(() => {
  cleanup(); // 清除所有渲染的组件
});

describe('Mask component visibility', () => {
  it('should be hidden initially and visible after updating props', async () => {
    render(<Mask visible={false} />);
    const element = document.body.querySelector(
      `.${prefixCls}-mask`,
    ) as HTMLElement;
    // 初始状态，Mask 不可见
    expect(element).toBeNull();
    render(<Mask visible={true} />);
    expect(
      document.body.querySelector(`.${prefixCls}-mask`),
    ).toBeInTheDocument();
    fireEvent.click(
      document.body.querySelector(`.${prefixCls}-mask`) as HTMLElement,
    );
    expect(document.body.querySelector(`.${prefixCls}-mask`)).toBeNull();
  });

  it('should apply zIndex and background correctly', () => {
    render(<Mask visible={true} zIndex={100} backgroundColor="#ff0000" />);
    const element = document.body.querySelector(
      `.${prefixCls}-mask`,
    ) as HTMLElement;
    expect(element).toHaveStyle({
      zIndex: 100,
      backgroundColor: '#ff0000',
    });
    fireEvent.click(element);
    expect(document.body.querySelector(`.${prefixCls}-mask`)).toBeNull();
  });
});
