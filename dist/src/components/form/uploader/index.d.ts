import React from 'react';
import { Interceptor, UploaderFileListItem } from './type';
import { ImageFit } from '../../base/image';
export declare type UploaderMaxSize =
  | number
  | string
  | ((file: File) => boolean);
export declare type lifeCycleCallBack = () => void;
export interface UploaderProps {
  /**
   * @description  上传地址 如果不传则组件提供文件选择功能
   */
  action?: string;
  /**
   * @description  上传前执行回调函数
   */
  beforeUpload?: (file: File) => boolean;
  /**
   * @description  文件改变回调函数
   */
  onChange?: (file: File, files: UploaderFileListItem[], response: any) => void;
  /**
   * @description  上传失败回调函数
   */
  onError?: lifeCycleCallBack;
  /**
   * @description  删除文件回调函数
   */
  onRemove?: (file: UploaderFileListItem) => void;
  /**
   * @description  文件大小超过限制回调函数
   */
  onOversize?: (itmes: UploaderFileListItem[]) => void;
  /**
   * @description  删除文件操作前回调函数,可以返回一个 Boolean | Promise
   */
  beforeDelete?: Interceptor;
  /**
   * @description  是否可多选
   */
  multiple?: boolean;
  /**
   * @description  已上传的文件列表
   */
  fileList?: Array<any>;
  /**
   * @description  允许上传的文件类型
   * @default image/*
   */
  accept?: string;
  /**
   * @description  文件大小限制，单位为 byte
   * @default image/*
   */
  maxSize?: number | string | UploaderMaxSize;
  /**
   * @description  自定义请求头
   */
  customHeaer?: object;
  /**
   * @description  是否禁用文件上传
   */
  disabled?: boolean;
  /**
   * @description  预览图和上传区域的尺寸，默认单位为 px
   */
  previewSize?: string;
  /**
   * @description  预览图裁剪模式，可选值见 Image 组件
   */
  imageFit?: ImageFit;
  /**
   * @description  文件上传数量限制
   */
  maxCount?: number;
  /**
   * @description  是否展示删除按钮
   */
  deletable?: boolean;
  /**
   * @description  标识符，可以在回调函数的第二项参数中获取
   */
  name?: string;
}
declare const Uploader: React.FC<UploaderProps>;
export default Uploader;
