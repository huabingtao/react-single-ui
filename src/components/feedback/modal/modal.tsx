import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TouchFeedback from 'rmc-feedback';
import { prefixCls } from '../../../util';
import Mask from '../../base/mask/index';
import Button, { ButtonType } from '../../base/button/index';
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

export type Alert = (
  title: React.ReactNode,
  message: React.ReactNode,
  actions?: Action<React.CSSProperties>[],
  platform?: string,
) => { close: () => void };

// @ts-ignore
const Modal: React.FC<ModalProps<React.CSSProperties>> & { alert: Alert } = (
  props,
) => {
  const { visible, ...restProps } = props;

  const renderFooterButton = (button: Action<React.CSSProperties>, i) => {
    let buttonStyle = {};
    if (button.style) {
      buttonStyle = button.style;
      if (typeof buttonStyle === 'string') {
        const styleMap: {
          [key: string]: object;
        } = {
          cancel: {},
          default: {},
          destructive: { color: 'red' },
        };
        buttonStyle = styleMap[buttonStyle] || {};
      }
    }
    const onClickFn = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (button.onPress) {
        button.onPress();
      }
    };
    const btnStyle = {
      flex: 1,
      padding: 0,
      fontSize: '18px',
      height: '50px',
      lineHeight: '50px',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      ...buttonStyle,
    };
    return (
      <Button
        style={{ ...btnStyle } as React.CSSProperties}
        key={i}
        onClick={onClickFn}
        btnType={ButtonType.Link}
      >
        {button.text || `Button`}
      </Button>
    );
  };

  const ModalNode = (props) => {
    const { title, message, footer } = props;
    // console.log(props);

    return (
      <div className={`${modalPrefixCls}`}>
        <div className={`${modalPrefixCls}-header`}>{title}</div>
        <div className={`${modalPrefixCls}-body`}>{message}</div>
        <div className={`${modalPrefixCls}-footer`}>
          {footer?.map((button, i) => renderFooterButton(button, i))}
        </div>
      </div>
    );
  };
  return (
    <Mask visible={visible} {...restProps}>
      <ModalNode {...restProps}></ModalNode>
    </Mask>
  );
};

export default Modal;
