import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { prefixCls, toArray } from '../../../util';
import axios from 'axios';
import UploaderPreviewItem from './uploaderPreviewItem';
import { Icon } from '../../..';
import { UploaderFileListItem } from './type';
import { ImageFit } from '../../base/image';

const uploadPrefixCls = `${prefixCls}-uploader`;

export type lifeCycleCallBack = () => void;
export interface UploaderProps {
  action: string;
  beforeUpload: lifeCycleCallBack;
  onProgress: lifeCycleCallBack;
  onChange: lifeCycleCallBack;
  onError: lifeCycleCallBack;
  onRemove: lifeCycleCallBack;
  mulitiple: boolean;
  data: object;
  fileList: Array<any>;
  accept: string;
  maxSize: number;
  maxLength: number;
  customHeaer: object;
  multiple: boolean;
  disabled: boolean;
  previewSize: string;
  imageFit: ImageFit;
}
const Uploader: React.FC<UploaderProps> = (props) => {
  const inputRef = useRef(null);

  const { multiple, disabled, previewSize, imageFit } = props;
  const [fileList, setFileList] = useState(props.fileList || []);
  useEffect(() => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts')
      .then((response) => console.log(response.data));
  });

  const renderPreviewItem = (item, index) => {
    return (
      <UploaderPreviewItem
        item={item}
        imageFit={imageFit}
        index={index}
        previewSize={previewSize}
        beforeDelete={item.beforeDelete}
        deletable={item.deletable}
      ></UploaderPreviewItem>
    );
  };

  const renderRreviewItemList = () => {
    console.log('fileList:', fileList);

    return fileList.map(renderPreviewItem);
  };

  const readFileContent = (file: File) => {
    return new Promise<string | void>((resolve) => {
      // resolve();
      // return;
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve((event.target as FileReader).result as string);
      };
      reader.readAsDataURL(file);
    });
  };

  const onAfterRead = (
    items: UploaderFileListItem | UploaderFileListItem[],
  ) => {
    resetInput();
    items = toArray(items);

    setFileList([...fileList, ...items]);
  };

  const resetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const readFile = (files: File | File[]) => {
    if (Array.isArray(files)) {
    } else {
      readFileContent(files).then((content) => {
        const result: UploaderFileListItem = {
          file: files as File,
          status: '',
          message: '',
        };
        if (content) {
          result.content = content;
        }

        onAfterRead(result);
      });
    }
  };

  const onChange = (event: ChangeEvent) => {
    const { files } = event.target as HTMLInputElement;
    const file =
      files.length === 1 ? files[0] : ([].slice.call(files) as File[]);
    console.log('file:', file);
    readFile(file);
  };

  const renderUpload = () => {
    // 条件判断不满足就隐藏
    const renderInput = () => {
      return (
        <input
          ref={inputRef}
          type="file"
          className={`${uploadPrefixCls}-input`}
          capture={true}
          multiple={multiple}
          disabled={disabled}
          onChange={onChange}
        />
      );
    };
    return (
      <div className={`${uploadPrefixCls}-button`}>
        <Icon icon="camera"></Icon>
        {renderInput()}
      </div>
    );
  };

  return (
    <div className={uploadPrefixCls}>
      {renderRreviewItemList()}
      {renderUpload()}
    </div>
  );
};

export default Uploader;
