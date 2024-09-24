import '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import BreadcrumbItem, { BreadcrumbItemProps } from './breadcrumb-item';
import Breadcrumb, { BreadcrumbPrefixCls, BreadcrumbProps } from './index';

const TestWrapper: React.FC<{
  testId: string;
  children: React.ReactNode;
}> = ({ testId, children }) => {
  return <div data-testid={testId}>{children}</div>;
};

const breancrumbList = [
  {
    title: 'Home',
    href: 'xxx',
  },
  {
    title: 'About',
    href: 'xxx',
  },
  {
    title: 'Detail',
    href: 'xxx',
  },
];

const disabledBreancrumbList = [
  {
    title: 'Home',
    href: 'xxx',
    disabled: true,
  },
  {
    title: 'About',
    href: 'xxx',
    disabled: true,
  },
  {
    title: 'Detail',
    href: 'xxx',
    disabled: true,
  },
];

describe('Breadcrumb', () => {
  beforeEach(() => {
    // 在每个测试用例前重置所有的 mock
    jest.clearAllMocks();
  });
  const renderBreadcrumb = (
    id: string,
    breancrumbList: BreadcrumbItemProps[],
    props: BreadcrumbProps,
  ) => {
    const { getByTestId, debug } = render(
      <TestWrapper testId={id}>
        <Breadcrumb {...props}>
          {breancrumbList.map((item) => {
            return (
              <BreadcrumbItem key={item.title} disabled={item.disabled}>
                {item.title}
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
      </TestWrapper>,
    );
    const element = getByTestId(id);
    return {
      element,
      debug,
    };
  };
  it('should render correctly Breadcrumb width default props', () => {
    const handleSelect = jest.fn();
    const { element: wrapElement } = renderBreadcrumb(
      'test-breadcrumb-01',
      breancrumbList,
      {
        onSelect: handleSelect,
      },
    );

    fireEvent.click(wrapElement.querySelector('li') as HTMLElement);
    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(wrapElement).toBeInTheDocument();
    expect(wrapElement.querySelector('ul')).toBeInTheDocument();
    expect(wrapElement.querySelector('ul')).toHaveClass(BreadcrumbPrefixCls);
    expect(wrapElement.querySelectorAll('li').length).toBe(
      breancrumbList.length,
    );
  });
  it('custom color', () => {
    const { element: wrapElement } = renderBreadcrumb(
      'test-breadcrumb-02',
      breancrumbList,
      {
        activeColor: '#0818f5',
        inactiveColor: '#9193e263',
      },
    );
    const firstItem = wrapElement.querySelector('li')!;
    const lastItem = wrapElement.querySelector('li:last-child')!;
    expect(firstItem).toHaveStyle({
      color: '#9193e263',
    });
    expect(lastItem).toHaveStyle({
      color: '#0818f5',
    });
  });

  it('custon separator', () => {
    const { element: wrapElement } = renderBreadcrumb(
      'test-breadcrumb-03',
      breancrumbList,
      {
        separator: '>',
      },
    );
    const firstItem = wrapElement.querySelector('li');
    expect(firstItem?.querySelector('span:last-child')).toBeInTheDocument();
    expect(firstItem?.querySelector('span:last-child')).toHaveTextContent('>');
  });

  it('should render correctly disabled state', () => {
    const handleSelect = jest.fn();
    const { element: wrapElement } = renderBreadcrumb(
      'test-breadcrumb-04',
      disabledBreancrumbList,
      {
        disabled: true,
        onSelect: handleSelect,
      },
    );
    const item = wrapElement.querySelectorAll('li');
    item.forEach((i) => {
      expect(i).toHaveClass(`${BreadcrumbPrefixCls}-item-disabled`);
      fireEvent.click(i);
    });
    expect(handleSelect).toHaveBeenCalledTimes(0);
  });

  it('should log error when a child is not BreadcrumbItem', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {}); // mock console.error
    render(
      <TestWrapper testId={'test-breadcrumb-05'}>
        <Breadcrumb>
          {breancrumbList.map((item) => {
            return <div key={item.title}>{item.title}</div>;
          })}
        </Breadcrumb>
      </TestWrapper>,
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Warning: Breadcrumb has a child which is not BreadcrumbItem',
    );
  });
});
