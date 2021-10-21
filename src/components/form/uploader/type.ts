import { ImageFit } from '../../base/image';

export type Interceptor = (...args: any[]) => Promise<boolean> | boolean;

export type UploaderFileListItem = {
  uid: string;
  url?: string;
  file?: File;
  content?: string;
  isImage?: boolean;
  status?: '' | 'uploading' | 'done' | 'failed' | 'loading';
  message?: string;
  imageFit?: ImageFit;
  deletable?: boolean;
  previewSize?: number | string;
  beforeDelete?: Interceptor;
  percent?: number;
  response?: any;
  error?: any;
};
