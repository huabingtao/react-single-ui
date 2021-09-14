import React from 'react';
export interface Action<T> {
  text: string;
  onPress?: (...args: any[]) => void | Promise<any>;
  style?: T | string;
}
export interface ModalProps<T> {
  /**
   * @description  标题
   */
  title?: React.ReactNode;
  /**
   * @description 是否显示
   */
  visible?: boolean;
  /**
   * @description 点击蒙层是否允许关闭
   */
  maskClosable?: boolean;
  /**
   * @description 底部内容
   */
  footer?: Action<T>[];
  /**
   * @description 关闭回调函数
   */
  onClose?: () => void;
  /**
   * @description 提示信息
   */
  message?: React.ReactNode;
}
export interface ppp {
  title: string;
}
export declare type Alert = (
  title: React.ReactNode,
  message: React.ReactNode,
  actions?: Action<React.CSSProperties>[],
  platform?: string,
) => {
  close: () => void;
};
declare const Modal: React.FC<ModalProps<React.CSSProperties>> & {
  alert: Alert;
};
export default Modal;
