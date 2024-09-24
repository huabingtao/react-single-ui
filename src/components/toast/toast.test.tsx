import '@testing-library/jest-dom'; // 引入 jest-dom
import { act, screen } from '@testing-library/react';
import Toast, { CloseToastFn, ToastPrefixCls } from './';

describe('Test Toast component', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // 使用假定时器
  });

  afterEach(() => {
    jest.clearAllTimers(); // 清除所有定时器
  });
  test('Toast should render correctly with simple text', async () => {
    await act(() => {
      Toast.info({
        content: 'test',
        duration: 3,
      });
    });
    await act(() => {
      const element = document.querySelector(`.${ToastPrefixCls}`);
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('test');

      jest.advanceTimersByTime(3000);

      expect(element).not.toBeInTheDocument();
    });
  });

  it('should render correctly with loading type', async () => {
    await act(() => {
      Toast.loading({
        content: 'loading',
      });
    });

    await act(() => {
      expect(screen.getByText('loading')).toBeInTheDocument();
      jest.advanceTimersByTime(3000);
      expect(screen.queryByText('loading')).not.toBeInTheDocument();
    });
  });

  test('success toast should render correctly', async () => {
    await act(() => {
      Toast.success({
        content: 'success',
      });
    });
    await act(() => {
      expect(screen.getByText('success')).toBeInTheDocument();
      expect(
        document.querySelector(`.${ToastPrefixCls}-success`),
      ).toBeInTheDocument();
    });
  });

  test('fail toast should render correctly', async () => {
    await act(() => {
      Toast.fail({
        content: 'fail',
      });
    });
    await act(() => {
      expect(screen.getByText('fail')).toBeInTheDocument();
    });
  });

  it('should always show Toast when duration is 0', async () => {
    await act(() => {
      Toast.info({
        content: 'always show toast',
        duration: 0,
      });
    });
    await act(() => {
      expect(screen.getByText('always show toast')).toBeInTheDocument();
      jest.advanceTimersByTime(4000);
      expect(screen.queryByText('always show toast')).toBeInTheDocument();
      Toast.closeAll();
    });
  });

  it('should customize duration', async () => {
    await act(() => {
      Toast.info({
        content: 'show toast 5 seconds',
        duration: 5,
      });
    });
    await act(() => {
      expect(screen.getByText('show toast 5 seconds')).toBeInTheDocument();
      jest.advanceTimersByTime(4000);
      expect(screen.getByText('show toast 5 seconds')).toBeInTheDocument();
      jest.advanceTimersByTime(2000);
      expect(
        screen.queryByText('show toast 5 seconds'),
      ).not.toBeInTheDocument();
      Toast.closeAll();
    });
  });

  it('hould render toast with mask allowing clicks when maskClickable is true', async () => {
    await act(() => {
      Toast.info({
        content: 'test mask',
        maskClickable: true,
        duration: 0,
      });
    });

    await act(() => {
      const wrapper = document.querySelector(`.${ToastPrefixCls}`);
      expect(wrapper).toHaveStyle('pointer-events: none');
      Toast.closeAll();
    });
  });

  it('should render toast with mask blocking clicks when maskClickable is false', async () => {
    await act(() => {
      Toast.info({
        content: 'test maskClickable',
        maskClickable: false,
        duration: 0,
      });
    });

    await act(() => {
      const wrapper = document.querySelector(`.${ToastPrefixCls}`);
      expect(wrapper).toHaveStyle('pointer-events: auto');
      Toast.closeAll();
    });
  });

  it('should render close all toast when closeAll is called', async () => {
    await act(() => {
      Toast.info({
        content: 'test close all',
        duration: 0,
      });
      Toast.success({
        content: 'test close all',
        duration: 0,
      });
      jest.advanceTimersByTime(4000);
    });
    await act(() => {
      const toastElements = document.querySelectorAll(`.${ToastPrefixCls}`);
      expect(toastElements.length).toBe(2);
    });
  });

  it('should correctly handle afterClose callback', async () => {
    const afterClose = jest.fn();
    let close: CloseToastFn | null = null;
    await act(async () => {
      close = Toast.info({
        content: 'test afterClose',
        duration: 0,
        onAfterClose: afterClose,
      });
    });
    // 确保在关闭 Toast 时推进计时器
    await act(async () => {
      close && close(); // 调用关闭函数
      jest.advanceTimersByTime(1000); // 推进 1000ms
    });

    // 断言 afterClose 被调用
    expect(afterClose).toHaveBeenCalled();
  });
});
