import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { prefixCls } from '../../utils';
import Icon from '../icon';
import Loading from '../loading';

library.add(faCheck, faXmark);
const toastCloseRefs: (() => void)[] = [];
export interface ToastProps<T> {
  /**
   * Toast 类型
   * @default info
   */
  type?: T;
  /**
   * Toast 内容
   */
  content?: React.ReactNode;
  /**
   * 显示时长，单位为秒
   * @default 3
   */
  duration?: number;
  /**
   * 是否允许背景点击
   * @default true
   */
  maskClickable?: boolean;
  /**
   * 完全关闭回调
   */
  onAfterClose?: () => void;
}

export type ToastType = 'success' | 'fail' | 'info' | 'loading';

export const ToastPrefixCls = prefixCls + '-toast';

type TostFnType = (options: {
  content: React.ReactNode;
  duration?: number;
}) => void;

const Toast: React.FC<ToastProps<ToastType>> & {
  info: TostFnType;
  success: TostFnType;
  fail: TostFnType;
  loading: TostFnType;
  closeAll: () => void;
} = ({ type = 'info', content, maskClickable = true }) => {
  const classes = classNames(ToastPrefixCls, {
    [`${ToastPrefixCls}-${type}`]: type,
  });

  const iconElement = useMemo(() => {
    if (type === null || type === undefined) return null;
    switch (type) {
      case 'success':
        return <Icon icon={faCheck} size="2x" />;
      case 'fail':
        return <Icon icon={faXmark} size="2x" />;
      case 'loading':
        return <Loading size="2x" color="#fff" />;
      default:
        return '';
    }
  }, [type]);

  return (
    <div
      className={classes}
      style={{ pointerEvents: maskClickable ? 'none' : 'auto' }}
    >
      <div className={`${ToastPrefixCls}-content`}>
        {type !== 'info' && (
          <div className={`${ToastPrefixCls}-icon-wrap`}>{iconElement}</div>
        )}
        <p>{content}</p>
      </div>
    </div>
  );
};

// 通用的渲染方法
const showToast = (
  type: ToastType,
  { content, duration = 3, onAfterClose }: ToastProps<ToastType>,
) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);

  const close = () => {
    const index = toastCloseRefs.indexOf(close);
    if (index !== -1) {
      toastCloseRefs.splice(index, 1); // 移除关闭引用
    }

    // toastCloseRefs.splice(toastCloseRefs.indexOf(close), 1);
    root.unmount();
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    if (onAfterClose) onAfterClose();
  };

  if (duration) {
    setTimeout(() => {
      close();
    }, duration * 1000);
  }

  toastCloseRefs.push(close);

  root.render(<Toast type={type} content={content} />);

  return close;
};

Toast.closeAll = () => {
  // 调用每个 Toast 的关闭函数
  while (toastCloseRefs.length > 0) {
    const close = toastCloseRefs.pop(); // 从数组尾部开始关闭
    if (close) {
      close();
    }
  }
};

// 添加静态方法支持多种类型的 Toast
Toast.info = (props: ToastProps<'info'>) => showToast('info', props);
Toast.success = (props: ToastProps<'success'>) => showToast('success', props);
Toast.fail = (props: ToastProps<'fail'>) => showToast('fail', props);
Toast.loading = (props: ToastProps<'loading'>) => showToast('loading', props);

export default Toast;
