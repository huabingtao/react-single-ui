import React from 'react';
import { ImageFit } from '../../base/image';
export declare type lifeCycleCallBack = () => void;
export interface UploaderProps {
  action: string;
  beforeUpload: lifeCycleCallBack;
  onProgress: lifeCycleCallBack;
  onChange: lifeCycleCallBack;
  onError: lifeCycleCallBack;
  onRemove: lifeCycleCallBack;
  multiple: boolean;
  data: object;
  fileList: Array<any>;
  accept: string;
  maxSize: number;
  maxLength: number;
  customHeaer: object;
  disabled: boolean;
  previewSize: string;
  imageFit: ImageFit;
  maxCount: number;
  deletable: boolean;
}
declare const Uploader: React.FC<UploaderProps>;
export default Uploader;
