import React from 'react';
export interface BaseProps<T> {
  type: T;
  content: React.ReactNode;
  mask: boolean;
  duration: number;
  onClose: Function;
}
export declare type ToastType = 'success' | 'fail' | 'info' | 'loading';
declare const Toast: {
  show: (
    content: React.ReactNode,
    type: ToastType,
    mask: boolean,
    duration: number,
    onClose: Function,
  ) => void;
  info: (
    content: React.ReactNode,
    mask: boolean,
    duration: number,
    onClose: Function,
  ) => void;
  success: (
    content: React.ReactNode,
    mask: boolean,
    duration: number,
    onClose: Function,
  ) => void;
  fail: (
    content: React.ReactNode,
    mask: boolean,
    duration: number,
    onClose: Function,
  ) => void;
  loading: (
    content: React.ReactNode,
    mask: boolean,
    duration: number,
    onClose: Function,
  ) => void;
  hidden: () => void;
};
export default Toast;
