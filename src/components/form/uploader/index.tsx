import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { filterFiles, isOversize, prefixCls, toArray } from '../../../util';
import axios from 'axios';
import UploaderPreviewItem from './uploaderPreviewItem';
import { Icon } from '../../..';
import { Interceptor, UploaderFileListItem } from './type';
import { ImageFit } from '../../base/image';
import { isArray } from 'lodash';

const uploadPrefixCls = `${prefixCls}-uploader`;
export type UploaderMaxSize = number | string | ((file: File) => boolean);
export type lifeCycleCallBack = () => void;
export interface UploaderProps {
  action: string;
  beforeUpload: lifeCycleCallBack;
  onProgress: lifeCycleCallBack;
  onChange: lifeCycleCallBack;
  onError: lifeCycleCallBack;
  onRemove: lifeCycleCallBack;
  beforeDelete: Interceptor;
  multiple: boolean;
  data: object;
  fileList: Array<any>;
  accept: string;
  maxSize: number | string | UploaderMaxSize;
  maxLength: number;
  customHeaer: object;
  disabled: boolean;
  previewSize: string;
  imageFit: ImageFit;
  maxCount: number;
  deletable: boolean;
  name: string;
}
const Uploader: React.FC<UploaderProps> = (props) => {
  const inputRef = useRef(null);
  const {
    multiple,
    disabled,
    previewSize,
    imageFit,
    maxCount,
    deletable,
    name,
    maxSize,
  } = props;
  const [fileList, setFileList] = useState(props.fileList || []);
  useEffect(() => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts')
      .then((response) => console.log(response.data));
  });

  const renderPreviewItem = (item: any, index: number) => {
    return (
      <UploaderPreviewItem
        key={index}
        item={item}
        imageFit={imageFit}
        index={index}
        previewSize={previewSize}
        beforeDelete={item.beforeDelete}
        deletable={deletable}
        name={name}
        onDelete={() => {
          onDelete(item, index);
        }}
      ></UploaderPreviewItem>
    );
  };

  const onDelete = (item: File, index: number) => {
    const files = fileList.slice(0);
    files.splice(index, 1);
    setFileList(files);
  };

  const renderRreviewItemList = () => {
    return fileList.map(renderPreviewItem);
  };

  const readFileContent = (file: File) => {
    return new Promise<string | void>((resolve) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve((event.target as FileReader).result as string);
      };
      reader.readAsDataURL(file);
    });
  };
  // After reading the picture, merge the picture into the array
  const onAfterRead = (
    items: UploaderFileListItem | UploaderFileListItem[],
  ) => {
    resetInput();
    if (isOversize(items, maxSize)) {
      if (isArray(items)) {
        const { valid, invalid } = filterFiles(items, maxSize);
        items = valid;
      } else {
        return;
      }
    }
    items = toArray(items);
    setFileList([...fileList, ...items]);
  };

  // If the input data is not cleared, onchange will not be executed when uploading the same file
  const resetInput = () => {
    if (inputRef?.current as any) {
      // @ts-ignore
      inputRef.current.value = '';
    }
  };

  const readFile = (files: File | File[]) => {
    // If it's an Array
    if (Array.isArray(files)) {
      if (maxCount) {
        const remaincount = +maxCount - fileList.length;
        if (files.length > remaincount) {
          files = files.slice(0, remaincount);
        }
      }
      if (maxSize) {
      }
      Promise.all(files.map((file) => readFileContent(file))).then(
        (contents) => {
          const fileList = (files as File[]).map((file, index) => {
            const result: UploaderFileListItem = {
              file,
              status: '',
              message: '',
            };
            if (contents[index]) {
              result.content = contents[index] as string;
            }
            return result;
          });
          onAfterRead(fileList);
        },
      );
    } else {
      readFileContent(files).then((content) => {
        if (maxCount) {
          const remaincount = +maxCount - fileList.length;
          if (remaincount <= 0) return;
        }
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
    if (disabled || !files || !files.length) {
      return;
    }
    const file =
      files.length === 1 ? files[0] : ([].slice.call(files) as File[]);
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
