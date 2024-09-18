// mask.test.tsx
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import Mask from './';

describe('Mask Component', () => {
  it('should not render mask when visible is false', () => {
    render(<Mask visible={false} data-testid="mask" />);

    // 确保在 visible 为 false 时不渲染遮罩
    expect(screen.queryByTestId('mask')).toBeNull();
  });

  it('should render mask when visible is true', async () => {
    render(<Mask visible={true} className="test-02" />);

    // 等待组件渲染完成
    await waitFor(() => {
      expect(document.querySelector('.test-02')).toBeInTheDocument();
    });
  });

  it('should call onMaskClick when mask is clicked', async () => {
    const mockOnMaskClick = jest.fn();

    render(
      <Mask visible={true} onMaskClick={mockOnMaskClick} className="test-03" />,
    );

    // 等待组件渲染完成
    await waitFor(() => {
      expect(document.querySelector('.test-03')).toBeInTheDocument();
    });

    // 触发点击事件
    fireEvent.click(document.querySelector('.test-03')!);

    // 确保点击事件处理程序被调用
    expect(mockOnMaskClick).toHaveBeenCalled();
  });

  it('should apply correct styles based on props', async () => {
    const backgroundColor = 'rgba(0, 0, 0, 0.5)';
    const zIndex = 1000;

    render(
      <Mask
        visible={true}
        backgroundColor={backgroundColor}
        zIndex={zIndex}
        className="test-04"
      />,
    );

    // 等待组件渲染完成
    await waitFor(() => {
      const maskElement = document.querySelector('.test-04') as HTMLElement;
      expect(maskElement).toBeInTheDocument();
      expect(maskElement).toHaveStyle(`background-color: ${backgroundColor}`);
      expect(maskElement).toHaveStyle(`z-index: ${zIndex}`);
    });
  });

  it('should not call onMaskClick when mask is not visible', async () => {
    const mockOnMaskClick = jest.fn();

    render(
      <Mask
        visible={false}
        onMaskClick={mockOnMaskClick}
        className="test-05"
      />,
    );

    // 确保在 visible 为 false 时不渲染遮罩
    expect(document.querySelector('.test-05')).toBeNull();

    // 触发点击事件，不应调用 onMaskClick
    fireEvent.click(document.body);
    expect(mockOnMaskClick).not.toHaveBeenCalled();
  });
});
