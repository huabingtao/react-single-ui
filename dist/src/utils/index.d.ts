import { UploaderMaxSize } from '../components/form/uploader';
import { UploaderFileListItem } from '../components/form/uploader/type';
export declare const prefixCls = 'sn';
export declare function toArray<T>(item: T | T[]): T[];
export declare function isImageUrl(url: string): boolean;
export declare function isImageFile(item: UploaderFileListItem): boolean;
export declare function isFunction(val: unknown): val is Function;
export declare function isObject(val: unknown): val is Record<any, any>;
export declare function isPromise<T = any>(val: unknown): val is Promise<T>;
export declare function isOversize(
  items: UploaderFileListItem | UploaderFileListItem[],
  maxSize: UploaderMaxSize,
): boolean;
export declare function filterFiles(
  items: UploaderFileListItem[],
  maxSize: UploaderMaxSize,
): {
  valid: UploaderFileListItem[];
  invalid: UploaderFileListItem[];
};
