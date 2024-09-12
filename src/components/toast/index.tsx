import React from 'react';
import classNames from 'classnames';
import Notification from 'rmc-notification';

import Icon from '.././icon';
import { prefixCls } from '../../utils';
// import { createRoot } from 'react-dom/client';

export interface BaseProps<T> {
  type?: T;
  content?: React.ReactNode;
  mask?: boolean;
  duration?: number;
  onClose?: () => void;
}
// eslint-disable-next-line
let messageInstance: any = null;
let messageNeedHide: boolean;
export type ToastType = 'success' | 'fail' | 'info' | 'loading';

const div = document.createElement('div');
// const root = createRoot(div);
document.body.appendChild(div);

const ToastPrefixCls = prefixCls + '-toast';
function getMessageInstance(
  mask: boolean,
  callback: (notification: unknown) => void,
) {
  const classes = classNames({
    [`${ToastPrefixCls}-mask`]: mask,
    [`${ToastPrefixCls}-nomask`]: !mask,
  });
  // eslint-disable-next-line
  Notification.newInstance(
    {
      prefixCls: `${ToastPrefixCls}`,
      style: {}, // clear rmc-notification default style
      transitionName: `${ToastPrefixCls}-fade`,
      className: classes,
    },
    // eslint-disable-next-line
    (notification: any) => callback && callback(notification),
  );
}
const notic = (props: BaseProps<ToastType>) => {
  const { content, mask = true, duration, onClose, type = 'info' } = props;

  const iconTypes: { [key: string]: string } = {
    info: '',
    success: 'check-circle',
    fail: 'times-circle',
    loading: 'spinner',
  };

  const iconType = iconTypes[type];
  messageNeedHide = false; // 这个属性暂时没搞清楚起了什么作用

  getMessageInstance(mask, (notification) => {
    if (!notification) {
      return;
    }

    if (messageInstance) {
      messageInstance.destroy(); // 如果之前有生成过实例就先关闭当前toast
      messageInstance = null;
    }

    if (messageNeedHide) {
      // eslint-disable-next-line
      notification.destroy();
      messageNeedHide = false;
      return;
    }

    messageInstance = notification;
    // eslint-disable-next-line
    notification.notice({
      content: (
        <div
          className={`${ToastPrefixCls}-content`}
          role="alert"
          aria-live="assertive"
        >
          {!!iconType && (
            <div className={`${ToastPrefixCls}-icon-wrap`}>
              <Icon
                // eslint-disable-next-line
                icon={iconType as any}
                size="2x"
                spin={type === 'loading'}
              ></Icon>
            </div>
          )}
          <div>{content}</div>
        </div>
      ),
      duration,
      onClose() {
        onClose && onClose();
        // eslint-disable-next-line
        notification.destroy();
        notification = null;
        messageInstance = null;
      },
    });
  });
};
const Toast = {
  show: (
    content: React.ReactNode,
    type?: ToastType,
    mask?: boolean,
    duration?: number,
    onClose?: () => void,
  ) => {
    const params = {
      content,
      type,
      mask,
      duration,
      onClose,
    };
    return notic(params);
  },
  info: (
    content: React.ReactNode,
    mask: boolean,
    duration: number,
    onClose: () => void,
  ) => {
    const params = {
      content,
      type: 'info' as const,
      mask,
      duration,
      onClose,
    };
    return notic(params);
  },
  success: (
    content: React.ReactNode,
    mask: boolean,
    duration: number,
    onClose: () => void,
  ) => {
    const params = {
      content,
      type: 'success' as const,
      mask,
      duration,
      onClose,
    };
    return notic(params);
  },
  fail: (
    content: React.ReactNode,
    mask: boolean,
    duration: number,
    onClose: () => void,
  ) => {
    const params = {
      content,
      type: 'fail' as const,
      mask,
      duration,
      onClose,
    };
    return notic(params);
  },
  loading: (
    content: React.ReactNode,
    mask: boolean,
    duration: number,
    onClose: () => void,
  ) => {
    const params = {
      content,
      type: 'loading' as const,
      mask,
      duration,
      onClose,
    };
    return notic(params);
  },
  hidden: () => {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    } else {
      messageNeedHide = true;
    }
  },
};

export default Toast;
