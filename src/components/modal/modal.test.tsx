import { act, render } from '@testing-library/react';
import React from 'react';
import Modal from './';
import { modalPrefixCls } from './modal';

describe('Modal', () => {
  it('should render correctly', () => {
    render(
      <Modal visible={true} title="test title" message="test message"></Modal>,
    );

    const modalElement = document.body.querySelector(`.${modalPrefixCls}`);
    // NOTE: ts 断言 !
    const messageElement = modalElement!.querySelector(
      `.${modalPrefixCls}-body`,
    );
    const titleElement = modalElement!.querySelector(
      `.${modalPrefixCls}-header`,
    );
    expect(titleElement).toBeInTheDocument();
    expect(modalElement).toBeInTheDocument();
    expect(messageElement).toHaveTextContent('test message');
    expect(titleElement).toHaveTextContent('test title');
  });

  it('should render footer correctly', () => {
    const handlePressCancel = jest.fn();
    const handlePressComfirm = jest.fn();
    const testFooter = [
      {
        text: '取消',
        onPress: () => {
          handlePressCancel();
        },
        style: {
          color: 'grey',
        },
      },
      {
        text: '确认',
        onPress: () => {
          handlePressComfirm();
        },
        style: 'default',
      },
    ];
    render(
      <Modal
        visible={true}
        title="Error"
        message="This is an error message"
        footer={testFooter}
      ></Modal>,
    );
    const wrapper = document.body.querySelector(`.${modalPrefixCls}`)!;
    const btns = wrapper.querySelectorAll('a');
    const cancelBtn = btns[0];
    const confirmBtn = btns[1];
    cancelBtn.click();
    confirmBtn.click();
    expect(cancelBtn).toBeInTheDocument();
    expect(confirmBtn).toBeInTheDocument();
    expect(cancelBtn).toHaveTextContent('取消');
    expect(confirmBtn).toHaveTextContent('确认');
    expect(handlePressCancel).toHaveBeenCalledTimes(1);
    expect(handlePressComfirm).toHaveBeenCalledTimes(1);
  });

  it('should render alert correctly', async () => {
    let closeFn: () => void;
    await act(() => {
      const { close } = Modal.alert({
        title: 'alert title',
        message: 'alert message',
      });
      closeFn = close;
    });
    const modal = document.body.querySelector(`.${modalPrefixCls}`)!;
    expect(modal).toBeInTheDocument();
    expect(modal.querySelector(`.${modalPrefixCls}-header`)).toHaveTextContent(
      'alert title',
    );
    expect(modal.querySelector(`.${modalPrefixCls}-body`)).toHaveTextContent(
      'alert message',
    );
    // 可选的：调用 close 并检查模态框是否被卸载
    await act(() => {
      closeFn();
    });
    expect(modal).not.toBeInTheDocument();
  });

  it('should correctly show and close modal', () => {
    const { rerender } = render(
      <Modal
        visible={false}
        title="test visible"
        message="test message"
      ></Modal>,
    );
    const modalElement = document.body.querySelector(`.${modalPrefixCls}`);
    expect(modalElement).not.toBeInTheDocument();
    rerender(
      <Modal
        visible={true}
        title="test visible"
        message="test message"
      ></Modal>,
    );
    const modalElement2 = document.body.querySelector(`.${modalPrefixCls}`);
    expect(modalElement2).toBeInTheDocument();
  });
});
