import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import Image, { ImageProps } from './index';

const imageSrc = 'https://img01.yzcdn.cn/vant/cat.jpeg';

describe('test Image component', () => {
  it('should render the correct default Image', () => {
    const { container } = render(<Image src={imageSrc}></Image>);
    const element = container.getElementsByClassName('sn-image-img')[0];
    expect(element).toBeInTheDocument();
  });
  it('should render the different fit Image component', () => {
    const { container } = render(<Image src="imageSrc" fit="contain" />);
    const element = container.getElementsByClassName('sn-image-img')[0];
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('sn-image-img');
    expect(element).toHaveStyle({ objectFit: 'contain' });
  });
  it('should render the round Image component', () => {
    const { container } = render(<Image src="imageSrc" round />);
    const element = container.getElementsByClassName('sn-image-wrap')[0];
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('sn-image-wrap sn-image-wrap-round');
  });
  it('should render component based on different props', () => {
    const { container } = render(
      <Image
        src="imageSrc"
        alt="Hello alt"
        width="100px"
        height="100px"
        radius="20%"
      />,
    );
    const element = container.getElementsByClassName('sn-image-wrap')[0];
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle({
      width: '100px',
      height: '100px',
      'border-radius': '20%',
    });
  });
  it('Successful and failed callback functions should be executed correctly', () => {
    const handleOnload = jest.fn();
    const handleOnError = jest.fn();
    const { container } = render(
      <Image
        onLoad={handleOnload}
        onError={handleOnError}
        src="imageSrc"
        fit="contain"
      />,
    );
    const element = container.getElementsByClassName('sn-image-img')[0];

    fireEvent.load(element);
    fireEvent.error(element);
    expect(handleOnload).toHaveBeenCalled();
    expect(handleOnError).toHaveBeenCalled();
  });
});
