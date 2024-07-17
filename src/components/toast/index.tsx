import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
// import Notification from 'rmc-notification';
// import Notification from '../../../../node_modules/rmc-notification/lib/index.js';

const Notification = require('rmc-notification').default;
// console.log('Notification:', Notification);

import Icon from '.././icon';
import { prefixCls } from '../../utils';

export interface BaseProps<T> {
  type: T;
  content: React.ReactNode;
  mask: boolean;
  duration: number;
  onClose: Function;
}
let messageInstance: any = null;
let messageNeedHide: boolean;
export type ToastType = 'success' | 'fail' | 'info' | 'loading';

const div = document.createElement('div');
document.body.appendChild(div);
const ToastPrefixCls = prefixCls + '-toast';
function getMessageInstance(
  mask: boolean,
  callback: (notification: any) => void,
) {
  const classes = classNames({
    [`${ToastPrefixCls}-mask`]: mask,
    [`${ToastPrefixCls}-nomask`]: !mask,
  });

  (Notification as any).newInstance(
    {
      prefixCls: `${ToastPrefixCls}`,
      style: {}, // clear rmc-notification default style
      transitionName: `${ToastPrefixCls}-fade`,
      className: classes,
    },
    (notification: any) => callback && callback(notification),
  );
}
const notic = (props: BaseProps<ToastType>) => {
  const { content, mask, duration, onClose, type } = props;

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
      notification.destroy();
      messageNeedHide = false;
      return;
    }

    messageInstance = notification;
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
        notification.destroy();
        notification = null;
        messageInstance = null;
      },
    });
  });

  // Notification.newInstance(
  //   { prefixCls: `${ToastPrefixCls}`, style: {}, className: classes },
  //   (notification: any) => {
  //     messageInstance = notification;
  //     notification.notice({
  //       content: (
  //         <div className={`${ToastPrefixCls}-content`} role="alert" aria-live="assertive">
  //           {!!iconType && <div className={`${ToastPrefixCls}-icon-wrap`}><Icon icon="check-circle" size="lg"></Icon></div>}
  //           <div>{content}</div>
  //         </div>
  //       ),
  //       duration,
  //       onClose() {
  //         onClose && onClose();
  //         notification.destroy();
  //         notification = null;
  //         messageInstance = null;
  //       },
  //     });
  //   },
  // );
};
const Toast = {
  show: (
    content: React.ReactNode,
    type: ToastType,
    mask: boolean,
    duration: number,
    onClose: Function,
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
    onClose: Function,
  ) => {
    const params = {
      content,
      type: 'info' as 'info',
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
    onClose: Function,
  ) => {
    const params = {
      content,
      type: 'success' as 'success',
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
    onClose: Function,
  ) => {
    const params = {
      content,
      type: 'fail' as 'fail',
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
    onClose: Function,
  ) => {
    const params = {
      content,
      type: 'loading' as 'loading',
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
