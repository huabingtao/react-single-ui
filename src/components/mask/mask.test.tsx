import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Mask from './index';
import { prefixCls } from '../../utils';

// 包裹组件
const TestWrapper: React.FC<{ testId: string; children: React.ReactNode }> = ({
  testId,
  children,
}) => <div data-testid={testId}>{children}</div>;

describe('Mask component visibility', () => {
  it('should be hidden initially and visible after updating props', async () => {
    const { container, getByTestId, rerender } = render(
      <TestWrapper testId="mask-01">
        <Mask visible={false} />
      </TestWrapper>,
    );
    expect(getByTestId('mask-01')).toBeInTheDocument();
    // 初始状态，Mask 不可见
    expect(container.querySelector(`.${prefixCls}-mask`)).toBeNull();
    // 改变 props，设置 visible 为 true
    rerender(
      <TestWrapper testId="mask-01">
        <Mask visible={true} />
      </TestWrapper>,
    );
    expect(
      document.body.querySelector(`.${prefixCls}-mask`),
    ).toBeInTheDocument();
    fireEvent.click(
      document.body.querySelector(`.${prefixCls}-mask`) as HTMLElement,
    );
  });

  it('should call onClick when mask is clicked', () => {
    const onClickMock = jest.fn();
    render(<Mask visible={true} onClick={onClickMock} />);
    const element = document.body.querySelector(
      `.${prefixCls}-mask`,
    ) as HTMLElement;
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(document.body.querySelector(`.${prefixCls}-mask`)).toBeNull();
  });

  it('should apply zIndex and background correctly', () => {
    render(<Mask visible={true} zIndex={999} backgroundColor="#ff0000" />);
    const element = document.body.querySelector(
      `.${prefixCls}-mask`,
    ) as HTMLElement;
    expect(element).toHaveStyle({
      zIndex: 999,
      backgroundColor: '#ff0000',
    });
    fireEvent.click(element);
    expect(document.body.querySelector(`.${prefixCls}-mask`)).toBeNull();
  });

  // 测试插入的内容是否可以正确渲染
  it('should render children correctly', () => {
    const { getByText } = render(
      <Mask visible={true}>
        <div>Hello World</div>
      </Mask>,
    );
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});
