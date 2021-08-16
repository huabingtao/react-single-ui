import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TouchFeedback from 'rmc-feedback';
import { prefixCls } from '../../../util';
import Mask from '../../base/mask/index';
import Button from '../../base/button/index';
import './index.scss';

const modalPrefixCls = prefixCls + '-modal';

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
  const { visible, ...restProps } = props;

  const ModalNode = (props) => {
    const { title, message, footer } = props;
    console.log(props);

    return (
      <div className={`${modalPrefixCls}`}>
        <div className={`${modalPrefixCls}-header`}>{title}</div>
        <div className={`${modalPrefixCls}-body`}>{message}</div>
        <div className={`${modalPrefixCls}-footer`}>
          {footer?.map((button) => {
            return <Button>{button.text}</Button>;
          })}
        </div>
      </div>
    );
  };

  const Props = {
    prefixCls: `${modalPrefixCls}-modal`,
    transitionName: 'slide-up',
  };
  return (
    <Mask visible={visible} {...restProps}>
      <ModalNode {...restProps}></ModalNode>
    </Mask>
  );
};

export default Modal;
