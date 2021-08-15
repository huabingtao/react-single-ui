import React from 'react';
import Dialog from 'rmc-dialog';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TouchFeedback from 'rmc-feedback';
import { prefixCls } from '../../../util';

export interface Action<T> {
  text: string;
  onPress?: (...args: any[]) => void | Promise<any>;
  style?: T | string;
}
export interface ModalProps<T> {
  title?: React.ReactNode;
  visible: boolean;
  maskClosable?: boolean;
  closable?: boolean;
  footer?: Action<T>[];
  onClose?: () => void;
  message?: React.ReactNode;
}

export interface ppp {
  title: string;
}

const Modal: React.FC<ModalProps<React.CSSProperties>> = (props) => {
  const { ...restProps } = props;
  const Props = {
    prefixCls: `${prefixCls}-modal`,
    transitionName: 'slide-up',
  };
  return <Dialog {...Props} {...restProps}></Dialog>;
};

export default Modal;
