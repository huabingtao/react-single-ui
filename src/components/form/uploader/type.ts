import { ImageFit } from '../../base/image';

export type Interceptor = (...args: any[]) => Promise<boolean> | boolean;

export type UploaderFileListItem = {
  url?: string;
  file?: File;
  content?: string;
  isImage?: boolean;
  status?: '' | 'uploading' | 'done' | 'failed';
  message?: string;
  imageFit?: ImageFit;
  deletable?: boolean;
  previewSize?: number | string;
  beforeDelete?: Interceptor;
};
