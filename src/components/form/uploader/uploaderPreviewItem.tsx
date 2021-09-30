import React, { useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { isImageFile, prefixCls } from '../../../util';
import { ImageFit } from '../../base/image';
import { Interceptor, UploaderFileListItem } from './type';
import Image from '../../base/image';

const ItemPrefixCls = `${prefixCls}-uploader-item`;

export interface UploaderPreviewItemProps {
  index: Number;
  imageFit: ImageFit;
  deletable: Boolean;
  previewSize: string;
  beforeDelete: Interceptor;
  item: UploaderFileListItem;
}

const UploaderPreviewItem: React.FC<UploaderPreviewItemProps> = (props) => {
  const { item, imageFit, previewSize } = props;
  const renderPreview = () => {
    if (isImageFile(item)) {
      return (
        <Image
          fit={imageFit}
          width={previewSize || '90px'}
          height={previewSize || '90px'}
          src={item.content || item.url}
        ></Image>
      );
    }
  };
  return <div className={ItemPrefixCls}>{renderPreview()}</div>;
};

export default UploaderPreviewItem;
