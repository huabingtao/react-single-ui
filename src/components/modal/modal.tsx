// modal.tsx
import React from 'react';
import { prefixCls } from '../../utils';
import Mask from '../mask/index';
import Button, { ButtonType } from '../button/index';
import { createRoot } from 'react-dom/client';

const modalPrefixCls = prefixCls + '-modal';

export interface Action<T> {
  text: string;
  onPress?: (...args: unknown[]) => void | Promise<void>;
  style?: T | string;
}

export interface ModalProps<T> {
  title?: React.ReactNode;
  visible?: boolean;
  maskClosable?: boolean;
  footer?: Action<T>[];
  onClose?: () => void;
  message?: React.ReactNode;
}

export type Alert = (
  title: React.ReactNode,
  message: React.ReactNode,
  actions?: Action<React.CSSProperties>[],
) => { close: () => void };

const Modal: React.FC<ModalProps<React.CSSProperties>> & { alert: Alert } = (
  props,
) => {
  const { visible = false, ...restProps } = props;

  const renderFooterButton = (
    button: Action<React.CSSProperties>,
    i: React.Key,
  ) => {
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
    const onClickFn = (e: React.MouseEvent<HTMLButtonElement>) => {
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

  const ModalNode = (props: ModalProps<React.CSSProperties>) => {
    const { title, message, footer } = props;

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

// 实现 alert 函数并将其挂载到 Modal 上
Modal.alert = function (title, message, actions) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);
  const close = () => {
    root.unmount();
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  };
  root.render(
    <Modal visible={true} title={title} message={message} footer={actions} />,
  );
  return { close };
};

export default Modal;
