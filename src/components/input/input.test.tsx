import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { prefixCls } from '../../utils';
import Input from './index';
import { BaseInputProps } from './input.d';
const TestInputWrapper: React.FC<{
  testId?: string;
  children: React.ReactNode;
}> = ({ testId, children }) => {
  return <div data-testid={testId}>{children}</div>;
};
// 使用Exclude排除undeined
type InputType = Exclude<BaseInputProps['type'], undefined>;

describe('Test Input component', () => {
  it('should render correctly Input value when onChange called', () => {
    const handleOnchange = jest.fn();
    const { container } = render(
      <TestInputWrapper>
        <Input onChange={handleOnchange}></Input>
      </TestInputWrapper>,
    );
    const inputElement = container.getElementsByTagName('input')[0];
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).toBe('test');
  });
  it('should render correctly tel Input value when onChange called', () => {
    const handleOnchange = jest.fn();
    const { container } = render(
      <TestInputWrapper>
        <Input type="tel" onChange={handleOnchange}></Input>
      </TestInputWrapper>,
    );
    const inputElement = container.getElementsByTagName('input')[0];
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).not.toBe('test');
    fireEvent.change(inputElement, { target: { value: '123' } });
    expect(inputElement.value).toBe('123');
  });
  it('should render correctly default Input', () => {
    const { container } = render(
      <TestInputWrapper>
        <Input></Input>
      </TestInputWrapper>,
    );
    const element = container.querySelector(`.${prefixCls}-input`);
    expect(element).toBeInTheDocument();
  });
  it('should render correctly Input with different type', () => {
    const types: InputType[] = ['text', 'tel', 'password', 'number'];
    types.forEach((type) => {
      const { getByTestId } = render(
        <TestInputWrapper testId={type}>
          <Input type={type}></Input>
        </TestInputWrapper>,
      );
      const element = getByTestId(type);
      expect(element).toBeInTheDocument();
      const inputElement = element.getElementsByTagName('input')[0];
      expect(inputElement?.getAttribute('type')).toBe(type);
    });
  });
  it('should show clearn button when clearble is true', () => {
    const { getByTestId } = render(
      <TestInputWrapper testId="test-clearble">
        <Input value="test" clearble={true}></Input>
      </TestInputWrapper>,
    );
    const element = getByTestId('test-clearble');
    expect(element).toBeInTheDocument();
    const clearButtonElement = element.querySelector(
      `.${prefixCls}-input-clear`,
    );
    expect(clearButtonElement).toBeInTheDocument();
  });
  it('should show required status when required is true', () => {
    const { getByTestId } = render(
      <TestInputWrapper testId="test-required">
        <Input required={true}></Input>
      </TestInputWrapper>,
    );
    const element = getByTestId('test-required');
    expect(element).toBeInTheDocument();
    const requiredElement = element.querySelector(
      `.${prefixCls}-input-required`,
    );
    expect(requiredElement).toBeInTheDocument();
  });
  it('should show disabled status when disabled is true', () => {
    const { getByTestId } = render(
      <TestInputWrapper testId="test-disabled">
        <Input disabled={true}></Input>
      </TestInputWrapper>,
    );
    const element = getByTestId('test-disabled');
    const disabledElement = element.querySelector(
      `.${prefixCls}-input-disabled`,
    );
    expect(disabledElement).toBeInTheDocument();
    const inputElement = element.getElementsByTagName('input')[0];
    expect(inputElement).toBeDisabled();
  });
  it('should show readonly status when readonly is true', () => {
    const { getByTestId } = render(
      <TestInputWrapper testId="test-readonly">
        <Input readonly={true}></Input>
      </TestInputWrapper>,
    );
    const element = getByTestId('test-readonly');
    const readonlyElement = element.querySelector(
      `.${prefixCls}-input-readonly`,
    );
    expect(readonlyElement).toBeInTheDocument();
    const inputElement = element.getElementsByTagName('input')[0];
    expect(inputElement).toHaveAttribute('readonly');
  });
  it('should show maxLength notice when maxLength is set', () => {
    const { getByTestId } = render(
      <TestInputWrapper testId="test-maxLength">
        <Input maxLength={10}></Input>
      </TestInputWrapper>,
    );
    const element = getByTestId('test-maxLength');
    const maxLengthElement = element.querySelector(
      `.${prefixCls}-input-max-length`,
    );
    expect(maxLengthElement).toBeInTheDocument();
  });
  it('test onFocus and onBlur event', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();
    const { getByTestId } = render(
      <TestInputWrapper testId="test-Event">
        <Input onFocus={handleFocus} onBlur={handleBlur}></Input>
      </TestInputWrapper>,
    );
    const element = getByTestId('test-Event');
    const inputElement = element.getElementsByTagName('input')[0];
    expect(inputElement).toBeInTheDocument();
    fireEvent.focus(inputElement);
    fireEvent.blur(inputElement);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
  it('should onClear event be called when clear button clicked', () => {
    const handleClear = jest.fn();
    const { getByTestId } = render(
      <TestInputWrapper testId="test-onClear">
        <Input value="test" clearble={true} onClear={handleClear}></Input>
      </TestInputWrapper>,
    );
    const wrapper = getByTestId('test-onClear');
    const clearButtonElement = wrapper.querySelector(
      `.${prefixCls}-input-clear`,
    );
    expect(clearButtonElement).toBeInTheDocument();
    fireEvent.click(clearButtonElement!);
    expect(handleClear).toHaveBeenCalled();
  });
});
