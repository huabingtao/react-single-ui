import React from 'react';
import { render } from '@testing-library/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Icon from './index';

library.add(faCheck);

describe('test Icon component', () => {
  it('should render the correct icon', () => {
    const wrapper = render(<Icon icon={faCheck} />);
    const element = wrapper.container.querySelector('svg');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('sn-icon');
  });
  it('should render the corrent icon with className',() =>{
    const wrapper = render(<Icon icon={faCheck} className="test-icon"/>);
    const element = wrapper.container.querySelector('svg');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('sn-icon test-icon');
  });
  it('should handle different icon props',()=>{
    const wrapper = render(<Icon icon={faCheck} size='xs' color='#010101'/>);
    const element = wrapper.container.querySelector('svg');
    expect(element).toBeInTheDocument();
    expect(element?.getAttribute('data-icon')).toBe('check');
    expect(element).toHaveClass('fa-xs');
    expect(element).toHaveAttribute('color','#010101');
  })
  it('should apply spin class when spin prop is true',()=>{
    const wrapper = render(<Icon icon={faCheck} spin />);
    const element = wrapper.container.querySelector('svg');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('fa-spin');
  })
});
