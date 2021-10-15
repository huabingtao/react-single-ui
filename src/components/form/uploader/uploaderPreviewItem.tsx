import React, { useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { isImageFile, isPromise, prefixCls } from '../../../util';
import { ImageFit } from '../../base/image';
import { Interceptor, UploaderFileListItem } from './type';
import Image from '../../base/image';
import Loading from '../../base/loading';
import Icon from '../../base/icon';

const ItemPrefixCls = `${prefixCls}-uploader-item`;

export interface UploaderPreviewItemProps {
  index: Number;
  imageFit: ImageFit;
  deletable: Boolean;
  previewSize: string;
  beforeDelete: Interceptor;
  item: UploaderFileListItem;
  name: string;
  onDelete: () => void;
}

const UploaderPreviewItem: React.FC<UploaderPreviewItemProps> = (props) => {
  const {
    item,
    imageFit,
    previewSize,
    deletable,
    index,
    beforeDelete,
    name,
    onDelete,
  } = props;

  const handleDelete = () => {
    if (beforeDelete) {
      const returnVal = beforeDelete.apply(null, [item, { name, index }]);
      if (isPromise(returnVal)) {
        returnVal.then((res) => {
          if (res) {
            onDelete();
          }
        });
      }
    } else {
      onDelete();
    }
  };
  const renderPreview = () => {
    if (isImageFile(item)) {
      return (
        <Image
          fit={imageFit}
          width={previewSize || '90px'}
          height={previewSize || '90px'}
          src={item.content || item.url || ''}
        ></Image>
      );
    }
  };

  const renderDeleteIcon = () => {
    if (deletable) {
      return (
        <div className={`${ItemPrefixCls}-delete`} onClick={handleDelete}>
          <div className={`${ItemPrefixCls}-delete-icon`}>
            <Icon size="2x" icon="times"></Icon>
          </div>
        </div>
      );
    }
  };

  const renderStatusView = () => {
    const { status, message } = item;
    if (!status) {
      return;
    }
    return (
      <div className={`${ItemPrefixCls}-mask`}>
        {status === 'uploading' && <Icon size="lg" icon="spinner" spin></Icon>}
        {status === 'failed' && (
          <Icon size="lg" icon="exclamation-circle"></Icon>
        )}
        <span>{message}</span>
      </div>
    );
  };
  return (
    <div className={ItemPrefixCls}>
      {renderPreview()}
      {renderDeleteIcon()}
      {renderStatusView()}
    </div>
  );
};

export default UploaderPreviewItem;
