import React from 'react';
export type InputEventHandler = (value?: string | undefined) => void;
export interface BaseInputProps {
  /**
   * 输入类型
   * @description 设置输入框的类型
   * @default "text"
   */
  type?: 'text' | 'tel' | 'number' | 'password';

  /**
   * 输入值
   * @description 输入框的当前值
   */
  value?: string;

  /**
   * 占位符
   * @description 输入框的占位符文本
   */
  placeholder?: string;

  /**
   * 标签
   * @description 输入框标签标题
   */
  label?: React.ReactNode;

  /**
   * 是否必填
   * @description 是否为必填字段
   * @default false
   */
  required?: boolean;

  /**
   * 是否禁用
   * @description 是否禁用输入框
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否只读
   * @description 是否为只读输入框
   * @default false
   */
  readonly?: boolean;

  /**
   * 是否可清除
   * @description 是否显示清除按钮
   * @default false
   */
  clearble?: boolean;

  /**
   * 最大长度
   * @description 输入框的最大长度
   */
  maxLength?: number;

  /**
   * 默认值
   * @description 输入框的默认值
   */
  defaultValue?: string;

  /**
   * 改变事件
   * @description 输入框值改变时的回调函数
   */
  onChange?: InputEventHandler;

  /**
   * 聚焦事件
   * @description 输入框聚焦时的回调函数
   */
  onFocus?: InputEventHandler;

  /**
   * 失焦事件
   * @description 输入框失去焦点时的回调函数
   */
  onBlur?: InputEventHandler;

  /**
   * 清除事件
   * @description 点击清除按钮时的回调函数
   */
  onClear?: InputEventHandler;
}
