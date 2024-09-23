import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button, { ButtonProps, ButtonSize, ButtonType } from './index';
const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'test-class',
};

const testLinkProps: ButtonProps = {
  btnType: ButtonType.Link,
  href: 'www.baidu.com',
};

const testDisabledProps: ButtonProps = {
  btnType: ButtonType.Primary,
  disabled: true,
  onClick: jest.fn(),
};

describe('test Button component', () => {
  it('shoud render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('sn-btn sn-btn-default');
    expect(element).not.toBeDisabled();
    expect(element).toBeInTheDocument();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('shoud render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>different</Button>);
    const element = wrapper.getByText('different');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('sn-btn test-class sn-btn-primary sn-btn-lg');
  });
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button {...testLinkProps}>Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('sn-btn sn-btn-link');
  });
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...testDisabledProps}>Disabled</Button>);
    const element = wrapper.getByText('Disabled');
    expect(element).toBeInTheDocument();
    expect(element).toBeDisabled();
    fireEvent.click(element);
    expect(testDisabledProps.onClick).not.toHaveBeenCalled();
  });
});
