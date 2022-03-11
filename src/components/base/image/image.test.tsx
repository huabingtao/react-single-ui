import React from 'react';
import { render } from '@testing-library/react';
import Image, { ImageProps } from './index';

const imageSrc = 'https://img01.yzcdn.cn/vant/cat.jpeg';

describe('test Image component', () => {
  it('shoud render the correct default Image', () => {
    const { container } = render(<Image src={imageSrc}></Image>);

    const element = container.getElementsByClassName('sn-image-wrap')[0];
    expect(element).toBeInTheDocument();
  });
});
