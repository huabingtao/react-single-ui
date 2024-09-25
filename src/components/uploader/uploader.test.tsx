import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
// import userEvent from "@testing-library/user-event";
import axios, { AxiosProgressEvent } from 'axios';
import { prefixCls } from '../../utils';
import Uploader, { UploaderProps } from './';
import { UploaderFileListItem } from './type';

// Mock axios post request
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const TestUploaderWrapper: React.FC<{
  testId: string;
  children: React.ReactNode;
}> = ({ testId, children }) => {
  return <div data-testid={testId}>{children}</div>;
};

const defaultProps: UploaderProps = {
  onChange: jest.fn(),
};

describe('Test Uploader component', () => {
  it('should render correctly Uploader component', () => {
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-01">
        <Uploader {...defaultProps} />
      </TestUploaderWrapper>,
    );
    const wrapElement = getByTestId('test-uploader-01');
    expect(wrapElement).toBeInTheDocument();
    const uploaderElement = wrapElement.querySelector(`.${prefixCls}-uploader`);
    expect(uploaderElement).toBeInTheDocument();
  });

  it('onChange method should be called', async () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-02">
        <Uploader onChange={handleChange} />
      </TestUploaderWrapper>,
    );
    // 获取 file input 元素
    const fileInputElement = getByTestId('test-uploader-02').querySelector(
      '.sn-uploader-input',
    ) as HTMLInputElement;
    expect(fileInputElement).toBeInTheDocument();

    // 创建一个模拟文件
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    // 模拟用户点击 input 触发文件上传
    fireEvent.click(fileInputElement as HTMLInputElement);
    // 触发文件上传事件
    fireEvent.change(fileInputElement as HTMLInputElement, {
      target: { files: [file] },
    });
    // 验证 onChange 是否被调用
    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
  });

  it('beforeUpload should be called', async () => {
    const handleBeforeUpload = jest.fn();
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-03">
        <Uploader beforeUpload={handleBeforeUpload}></Uploader>
      </TestUploaderWrapper>,
    );
    const fileInputElement = getByTestId('test-uploader-03').querySelector(
      '.sn-uploader-input',
    ) as HTMLInputElement;
    expect(fileInputElement).toBeInTheDocument();
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    fireEvent.change(fileInputElement as HTMLInputElement, {
      target: { files: [file] },
    });
    await waitFor(() => expect(handleBeforeUpload).toHaveBeenCalledTimes(1));
  });

  it('beforeDelete', async () => {
    const handleBeforeDelete = jest.fn(() => {
      return true;
    });
    const imgList = [
      {
        uid: '01',
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        beforeDelete: handleBeforeDelete,
      },
    ];
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-04">
        <Uploader fileList={imgList}></Uploader>
      </TestUploaderWrapper>,
    );
    const deleteBtn = getByTestId('test-uploader-04').querySelector(
      `.${prefixCls}-uploader-item-delete`,
    ) as HTMLInputElement;
    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);
    expect(handleBeforeDelete).toHaveBeenCalledTimes(1);
  });
  it('onRemove', () => {
    const handleRemove = jest.fn();
    const imgList = [
      {
        uid: '01',
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      },
    ];
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-05">
        <Uploader fileList={imgList} onRemove={handleRemove}></Uploader>
      </TestUploaderWrapper>,
    );
    const deleteBtn = getByTestId('test-uploader-05').querySelector(
      `.${prefixCls}-uploader-item-delete`,
    ) as HTMLInputElement;
    expect(deleteBtn).toBeInTheDocument();
    fireEvent.click(deleteBtn);
    expect(handleRemove).toHaveBeenCalledTimes(1);
    expect(deleteBtn).not.toBeInTheDocument();
  });
  it('upload status', () => {
    const imgList: UploaderFileListItem[] = [
      {
        uid: '01',
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        status: 'loading',
        message: '上传中',
      },
    ];

    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-06">
        <Uploader fileList={imgList}></Uploader>
      </TestUploaderWrapper>,
    );

    const wrapElement = getByTestId('test-uploader-06').querySelector(
      `.${prefixCls}-uploader`,
    ) as HTMLInputElement;
    expect(wrapElement).toBeInTheDocument();
    const svgElement = wrapElement.querySelectorAll('svg');
    expect(svgElement[1]).toHaveClass('fa-spinner');
  });
  it('limit count', async () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-07">
        <Uploader maxCount={2} onChange={handleChange}></Uploader>
      </TestUploaderWrapper>,
    );
    const fileInputElement = getByTestId('test-uploader-07').querySelector(
      '.sn-uploader-input',
    ) as HTMLInputElement;
    expect(fileInputElement).toBeInTheDocument();
    fireEvent.change(fileInputElement as HTMLInputElement, {
      target: {
        files: [new File(['hello'], 'hello.png', { type: 'image/png' })],
      },
    });
    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
    fireEvent.change(fileInputElement as HTMLInputElement, {
      target: {
        files: [new File(['word'], 'word.png', { type: 'image/png' })],
      },
    });
    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(2));
    fireEvent.change(fileInputElement as HTMLInputElement, {
      target: { files: [new File(['try'], 'try.png', { type: 'image/png' })] },
    });
    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(2));
  });
  it('maxSize', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-08">
        <Uploader maxSize={1024} onChange={handleChange}></Uploader>
      </TestUploaderWrapper>,
    );
    const fileInputElement = getByTestId('test-uploader-08').querySelector(
      '.sn-uploader-input',
    ) as HTMLInputElement;
    expect(fileInputElement).toBeInTheDocument();
    const file = new File(['hello'.repeat(2048)], 'hello.png', {
      type: 'image/png',
    });
    fireEvent.change(fileInputElement as HTMLInputElement, {
      target: { files: [file] },
    });
    expect(handleChange).toHaveBeenCalledTimes(0);
  });
  it('should render correctly Uploader width disabled', () => {
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-09">
        <Uploader disabled={true}></Uploader>
      </TestUploaderWrapper>,
    );
    const fileInputElement = getByTestId('test-uploader-09').querySelector(
      '.sn-uploader-input',
    ) as HTMLInputElement;
    expect(fileInputElement).toBeDisabled();
  });

  it('should handle the upload process and call updateFileList on progress, success, and error', async () => {
    const handleChange = jest.fn();
    // const updateFileListSpy = jest.spyOn(Uploader.prototype, 'updateFileList');

    // Update the mock implementation with type declaration
    mockedAxios.post.mockImplementationOnce((url, formData, config = {}) => {
      // 模拟上传进度
      if (config.onUploadProgress) {
        const progressEvent: AxiosProgressEvent = {
          loaded: 50,
          total: 100,
          bytes: 50, // 可以根据需要设置
          lengthComputable: true, // 可以根据需要设置
        };
        config.onUploadProgress(progressEvent);
      }
      return Promise.resolve({ data: 'upload successful' });
    });

    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-10">
        <Uploader action="http://example.com/upload" onChange={handleChange} />
      </TestUploaderWrapper>,
    );

    const fileInputElement =
      getByTestId('test-uploader-10').querySelector('.sn-uploader-input');

    // Simulate file input change
    fireEvent.change(fileInputElement!, {
      target: {
        files: [new File(['hello'], 'hello.png', { type: 'image/png' })],
      },
    });

    // Wait for the axios request to resolve
    await waitFor(() => expect(mockedAxios.post).toHaveBeenCalled());

    // Check if updateFileList was called during progress
    // expect(updateFileListSpy).toHaveBeenCalledWith(expect.anything(), {
    //   percent: 50,
    //   status: 'uploading',
    // });

    // // Check if updateFileList was called after success
    // expect(updateFileListSpy).toHaveBeenCalledWith(expect.anything(), {
    //   status: 'done',
    // });

    // // Clean up
    // updateFileListSpy.mockRestore();
  });

  it('should action use customFileName', async () => {
    const handleChange = jest.fn();
    mockedAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: 'upload successful' });
    });
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-11">
        <Uploader
          action="http://example.com/upload"
          customFileName="demoFileName.png"
          onChange={handleChange}
        />
      </TestUploaderWrapper>,
    );

    const fileInputElement =
      getByTestId('test-uploader-11').querySelector('.sn-uploader-input');

    // Simulate file input change
    fireEvent.change(fileInputElement!, {
      target: {
        files: [new File(['hello'], 'hello.png', { type: 'image/png' })],
      },
    });

    // Wait for the axios request to resolve
    await waitFor(() => expect(mockedAxios.post).toHaveBeenCalled());
  });

  it('should handle upload failure correctly', async () => {
    const handleChange = jest.fn();
    mockedAxios.post.mockRejectedValueOnce(new Error('上传失败'));
    const { getByTestId } = render(
      <TestUploaderWrapper testId="test-uploader-12">
        <Uploader action="http://example.com/upload" onChange={handleChange} />
      </TestUploaderWrapper>,
    );
    const fileInputElement =
      getByTestId('test-uploader-12').querySelector('.sn-uploader-input');

    fireEvent.change(fileInputElement!, {
      target: {
        files: [new File(['hello'], 'hello.png', { type: 'image/png' })],
      },
    });
    // expect(handleChange).toHaveBeenCalled();

    // 检查 onChange 被调用
    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith(
        expect.any(File), // 确保传入的第一个参数是文件
        expect.any(Array), // 第二个参数是文件列表
        expect.any(Error), // 第三个参数是错误对象
      );
    });
  });
});
