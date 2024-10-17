import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import classNames from 'classnames';
import { isArray } from 'lodash';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Icon } from '../..';
import { filterFiles, isOversize, prefixCls, toArray } from '../../utils';
import { ImageFit } from '../image';
import './_index.scss';
import { Interceptor, UploaderFileListItem } from './type';
import UploaderPreviewItem from './uploaderPreviewItem';
library.add(faCamera);

const uploadPrefixCls = `${prefixCls}-uploader`;
export type UploaderMaxSize = number | string | ((file: File) => boolean);
export type lifeCycleCallBack = () => void;
export type BeforeUploadReturnType = boolean | File | Promise<boolean | File>;
export interface UploaderProps {
  /**
   * @description  上传地址 如果不传则组件提供文件选择功能
   */
  action?: string;
  /**
   * @description  上传前执行回调函数
   */
  beforeUpload?: (file: File) => BeforeUploadReturnType;
  /**
   * @description  文件改变回调函数
   * @param files
   */
  onChange?: (
    file: File | File[] | '',
    files: UploaderFileListItem[],
    response: unknown,
  ) => void;
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
  fileList?: Array<UploaderFileListItem>;
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
  /**
   * @description  自定义 formData 参数名称
   */
  customFileName?: string;
}
const Uploader: React.FC<UploaderProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    multiple = true,
    disabled = false,
    customHeaer,
    previewSize,
    imageFit = 'fill',
    maxCount,
    deletable = true,
    name,
    customFileName,
    maxSize,
    accept = 'image/*',
    action,
    onOversize,
    onChange,
    beforeUpload,
    onRemove,
  } = props;
  const [fileList, setFileList] = useState(props.fileList || []);

  const updateFileList = (
    updateFile: UploaderFileListItem,
    updateObj: Partial<UploaderFileListItem>,
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const uploadFiles = (files: UploaderFileListItem[]) => {
    files.forEach((item: UploaderFileListItem) => {
      post(item, files);
    });
  };

  const post = (item: UploaderFileListItem, files: UploaderFileListItem[]) => {
    const result: UploaderFileListItem = {
      uid: Date.now() + 'upload-file',
      file: item.file,
      status: '',
      message: '',
      content: item.content,
    };
    setFileList((prevFileList) => {
      return [...prevFileList, result];
    });
    if (!item.file) {
      return;
    }
    const formData: FormData = new FormData();

    formData.append(
      customFileName ? customFileName : (item.file.name as string),
      item.file,
    );
    axios
      .post(action as string, formData, {
        headers: { 'Content-Type': 'multipart/form-data', ...customHeaer },
        onUploadProgress: (e) => {
          const percentage = Math.round((e.loaded * 100) / (e.total ?? 0)) || 0;
          updateFileList(result, { percent: percentage, status: 'uploading' });
        },
      })
      .then((response) => {
        onChange && onChange(item.file as File, files, response);
        updateFileList(result, { status: 'done' });
      })
      .catch((error) => {
        onChange && onChange(item.file as File, files, error);
        updateFileList(result, { status: 'failed', message: '上传失败' });
      });
  };

  const renderPreviewItem = (item: UploaderFileListItem, index: number) => {
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

  const onDelete = (item: UploaderFileListItem, index: number) => {
    const files = fileList.slice(0);
    const removeFile = files.splice(index, 1);
    setFileList(files);
    onRemove && onRemove(removeFile[0] as UploaderFileListItem);
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
    // If it exceeds a specific range
    if (maxSize) {
      if (isOversize(items, maxSize)) {
        if (isArray(items)) {
          const { valid, invalid } = filterFiles(items, maxSize);
          items = valid;
          onOversize && onOversize(invalid);
        } else {
          onOversize && onOversize(toArray(items));
          return;
        }
      }
    }

    items = toArray(items);
    if (action) {
      if (!items.length) {
        return;
      }

      uploadFiles(items);
    } else {
      setFileList([...fileList, ...items]);
      onChange && onChange('', [...fileList, ...items], '文件选择');
    }
  };

  // If the input data is not cleared, onchange will not be executed when uploading the same file
  const resetInput = () => {
    if (inputRef?.current) {
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

      Promise.all(files.map((file) => readFileContent(file))).then(
        (contents) => {
          let fileList = (files as File[]).map((file, index) => {
            const result: UploaderFileListItem = {
              uid: Date.now() + 'upload-file',
              file,
              status: '',
              message: '',
            };
            if (contents[index]) {
              result.content = contents[index] as string;
            }
            if (beforeUpload) {
              const beforeResult: BeforeUploadReturnType = beforeUpload(file);
              if (!beforeResult) {
                return false;
              }
              if (beforeResult && beforeResult instanceof Promise) {
                beforeResult
                  .then((data) => {
                    return data;
                  })
                  .catch(() => {
                    return;
                  });
              } else if (beforeResult) {
                return result;
              }
            }
            return result;
          });

          fileList = fileList.filter((item) => item);

          if (fileList.length) {
            onAfterRead(fileList as UploaderFileListItem[]);
          }
        },
      );
    } else {
      readFileContent(files).then((content) => {
        if (maxCount) {
          const remaincount = +maxCount - fileList.length;
          if (remaincount <= 0) return;
        }
        const result: UploaderFileListItem = {
          uid: Date.now() + 'upload-file',
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

  const handleChange = (event: ChangeEvent) => {
    const { files } = event.target as HTMLInputElement;
    if (disabled || !files || !files.length) {
      return;
    }
    const file =
      files.length === 1 ? [files[0]] : ([].slice.call(files) as File[]);

    readFile(file);
  };

  const renderUpload = () => {
    // 条件判断不满足就隐藏
    const renderInput = () => {
      return (
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className={`${uploadPrefixCls}-input`}
          capture={true}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
        />
      );
    };
    const btnClasses = classNames(`${uploadPrefixCls}-button`, {
      [`${uploadPrefixCls}-button-disabled`]: disabled,
    });
    return (
      <div className={btnClasses}>
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
