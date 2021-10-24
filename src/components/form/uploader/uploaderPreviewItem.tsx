import React, { useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { isImageFile, isPromise, prefixCls } from '../../../util';
import { ImageFit } from '../../base/image';
import { Interceptor, UploaderFileListItem } from './type';
import Image from '../../base/image';
import Loading from '../../base/loading';
import Icon from '../../base/icon';
import Progress from '../../data-display/progress';

const ItemPrefixCls = `${prefixCls}-uploader-item`;

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
            onDelete && onDelete();
          }
        });
      } else if (returnVal) {
        onDelete && onDelete();
      }
    } else {
      onDelete && onDelete();
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

    if (!status || status === 'done') {
      return;
    }
    return (
      <div className={`${ItemPrefixCls}-mask`}>
        {status === 'loading' && <Icon size="lg" icon="spinner" spin></Icon>}
        {status === 'failed' && (
          <Icon size="lg" icon="exclamation-circle"></Icon>
        )}
        <span>{message}</span>
      </div>
    );
  };

  const renderProgress = () => {
    const { percent, status } = item;
    if (status === 'uploading') {
      return (
        <div className={`${ItemPrefixCls}-progress-wrap`}>
          <Progress
            percent={percent || 0}
            wrapStyle={{ height: '8px' }}
          ></Progress>
        </div>
      );
    }
  };

  return (
    <div className={ItemPrefixCls}>
      {renderPreview()}
      {renderDeleteIcon()}
      {renderStatusView()}
      {renderProgress()}
    </div>
  );
};

export default UploaderPreviewItem;
