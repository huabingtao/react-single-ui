import React from 'react';
import { ImageFit } from '../../base/image';
import { Interceptor, UploaderFileListItem } from './type';
export interface UploaderPreviewItemProps {
  index?: Number;
  imageFit?: ImageFit;
  deletable?: Boolean;
  previewSize?: string;
  beforeDelete?: Interceptor;
  item: UploaderFileListItem;
  name?: string;
  onDelete?: () => void;
}
declare const UploaderPreviewItem: React.FC<UploaderPreviewItemProps>;
export default UploaderPreviewItem;
