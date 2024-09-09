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
  /**
   * @description 模态框的标题。可以是字符串、元素或任何 React 节点。
   * @default undefined
   */
  title?: React.ReactNode;

  /**
   * @description 模态框是否可见。
   * @default false
   */
  visible?: boolean;

  /**
   * @description 点击遮罩层（外部区域）是否可以关闭模态框。
   * @default true
   */
  maskClosable?: boolean;

  /**
   * @description 底部显示的操作按钮数组。
   * @default []
   */
  footer?: Action<T>[];

  // TODO: 待开发
  /**
   * @description 关闭模态框时触发的回调函数（待实现）。
   */
  onClose?: () => void;

  /**
   * @description 模态框显示的消息内容，可以是字符串、元素或任何 React 节点。
   */
  message?: React.ReactNode;
}

// 定义 Alert 类型
export type Alert = (options: {
  title: React.ReactNode;
  message: React.ReactNode;
  footer?: Action<React.CSSProperties>[];
}) => { close: () => void };

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
Modal.alert = function ({ title, message, footer }) {
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
    <Modal visible={true} title={title} message={message} footer={footer} />,
  );
  return { close };
};

export default Modal;
