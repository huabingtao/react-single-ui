import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Notification from 'rmc-notification';
// import 'index.scss';

export interface BaseProps {
  type: ToastType;
  content: React.ReactNode;
  mask: boolean;
  duration: number;
  onClose: Function;
}

export type ToastType = 'success' | 'fail' | 'info' | 'loading';

const div = document.createElement('div');
document.body.appendChild(div);

const notic = (props: BaseProps) => {
  const { content, mask, duration, onClose, type } = props;
  const classes = classNames({
    'single-toast-mask': mask,
    'single-toast-nomask': !mask,
  });
  console.log('classes:', classes);

  Notification.newInstance(
    { prefixCls: 'single-toast', style: {}, className: classes },
    (notification: any) => {
      notification.notice({
        content: (
          <div className="single-toast-text" role="alert" aria-live="assertive">
            <div>{content}</div>
          </div>
        ),
        duration,
        onClose() {
          onClose && onClose();
          notification.destroy();
          notification = null;
          // messageInstance = null;
        },
      });
    },
  );
  // return ReactDOM.render(<div>{content}</div>, div);
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
};

export default Toast;
