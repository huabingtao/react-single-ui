import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
// import userEvent from "@testing-library/user-event";
import Uploader, { UploaderProps } from './';
import { prefixCls } from '../../utils';
import { UploaderFileListItem } from './type';
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
    // fireEvent.click(fileInputElement as HTMLInputElement);
    // // 触发文件上传事件
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
});
