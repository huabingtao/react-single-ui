import { UploaderMaxSize } from '../components/uploader';
import { UploaderFileListItem } from '../components/uploader/type';

export const prefixCls = 'sn';
export function toArray<T>(item: T | T[]): T[] {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}

const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

export function isImageUrl(url: string): boolean {
  return IMAGE_REGEXP.test(url);
}

export function isImageFile(item: UploaderFileListItem): boolean {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (typeof item.content === 'string') {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}

export function isFunction<T extends (...args: unknown[]) => unknown>(
  val: unknown,
): val is T {
  return typeof val === 'function';
}

export function isObject(val: unknown): val is Record<string, unknown> {
  return val !== null && typeof val === 'object';
}

export function isPromise<T = unknown>(val: unknown): val is Promise<T> {
  return (
    isObject(val) &&
    isFunction((val as unknown as Promise<T>).then) &&
    isFunction((val as unknown as Promise<T>).catch)
  );
}

export function isOversize(
  items: UploaderFileListItem | UploaderFileListItem[],
  maxSize: UploaderMaxSize,
) {
  return toArray(items).some((item) => {
    if (item.file) {
      if (isFunction(maxSize)) {
        return maxSize(item.file);
      }
      return item.file.size > Number(maxSize);
    }
    return false;
  });
}

export function filterFiles(
  items: UploaderFileListItem[],
  maxSize: UploaderMaxSize,
) {
  const valid: UploaderFileListItem[] = [];
  const invalid: UploaderFileListItem[] = [];
  items.forEach((item) => {
    if (isOversize(item, maxSize)) {
      invalid.push(item);
    }
    valid.push(item);
  });
  return { valid, invalid };
}
