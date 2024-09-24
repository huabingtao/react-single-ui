import { act, render } from '@testing-library/react';
import React from 'react';
import Image, { ImageFit, ImageProps } from './index';

const defaultImageProps: ImageProps = {
  src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
  alt: 'cat',
};

const fits: ImageFit[] = ['contain', 'cover', 'fill', 'none', 'scale-down'];

describe('test image component', () => {
  it('should render correctly Image with default props', () => {
    const wrapper = render(<Image {...defaultImageProps}></Image>);
    const element = wrapper.container.querySelector('img');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('alt', defaultImageProps.alt);
    expect(element).toHaveAttribute('src', defaultImageProps.src);
  });

  it('should render correctly Image with custom width and height', () => {
    // 渲染组件
    const wrapper = render(
      <Image {...defaultImageProps} width="100px" height="100px"></Image>,
    );
    // 获取 img 元素
    const element = wrapper.container.querySelector('img');
    // 检查 img 元素是否存在
    expect(element).toBeInTheDocument();
    // 如果 img 元素存在，则获取其 parentElement
    const parentElement = element?.parentElement;
    // 断言 parentElement 存在，并且有正确的样式
    expect(parentElement).toBeInTheDocument(); // 确保 parentElement 也存在
    expect(parentElement).toHaveStyle('width: 100px; height: 100px');
  });

  it('should render correctly Image with custom fit', () => {
    fits.forEach((fit) => {
      const { container } = render(
        <Image {...defaultImageProps} fit={fit}></Image>,
      );
      const element = container.querySelector('img');
      expect(element).toBeInTheDocument();
      expect(element).toHaveStyle(`object-fit: ${fit}`);
    });
  });

  it('should render correctly Image width round and custom radius', () => {
    const { container } = render(<Image {...defaultImageProps} round></Image>);
    const { container: container2 } = render(
      <Image {...defaultImageProps} radius={30}></Image>,
    );
    const element = container.querySelector('img');
    const element2 = container2.querySelector('img');
    const parentElement = element?.parentElement;
    const parentElement2 = element2?.parentElement;

    expect(element2).toBeInTheDocument();
    expect(element).toBeInTheDocument();
    expect(parentElement).toBeInTheDocument();
    expect(parentElement2).toBeInTheDocument();
    expect(parentElement).toHaveStyle('border-radius: 50%');
    expect(parentElement2).toHaveStyle('border-radius: 30px');
  });

  it('should render correctly Image with showLoading', () => {
    const handleOnLoad = jest.fn();
    const { container } = render(
      <Image {...defaultImageProps} onLoad={handleOnLoad} showLoading></Image>,
    );
    const loadElement = container.querySelector('.sn-image-loading');
    expect(loadElement).toBeInTheDocument();
    // 手动创建并触发 onLoad 事件
    const loadEvent = new Event('load');
    const imgElement = container.querySelector('img');
    act(() => {
      imgElement?.dispatchEvent(loadEvent);
    });
    expect(handleOnLoad).toHaveBeenCalled();
    expect(loadElement).not.toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });

  it('should render correctly Image with showError', () => {
    const handleOnError = jest.fn();
    const { container } = render(
      <Image src="./xxx.jpg" onError={handleOnError} showError></Image>,
    );
    const errorEvent = new Event('error');
    const imgElement = container.querySelector('img');
    act(() => {
      imgElement?.dispatchEvent(errorEvent);
    });
    const errorElement = container.querySelector('.sn-image-error');
    expect(handleOnError).toHaveBeenCalledTimes(1);
    expect(errorElement).toBeInTheDocument();
  });

  it('should render empty when src is empty', () => {
    const { container } = render(<Image src=""></Image>);
    const imgElement = container.querySelector('img');
    expect(imgElement).not.toBeInTheDocument();
  });
  it('should use lazyLoad when prop is true', () => {
    const handleOnLoad = jest.fn();
    const { container } = render(
      <Image {...defaultImageProps} onLoad={handleOnLoad} lazyLoad></Image>,
    );
    // 手动创建并触发 onLoad 事件
    const loadEvent = new Event('load');
    const imgElement = container.querySelector('img');
    act(() => {
      imgElement?.dispatchEvent(loadEvent);
    });
  });
});
