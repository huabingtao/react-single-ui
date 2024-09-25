import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import TreeSelect from '.';
import { prefixCls } from '../../utils';
import { disabledData, simpleData } from './demo/data';
import { TreeSidebarProps } from './index.d';

const TreeSelectWrap: React.FC<{
  testId: string;
  children: React.ReactNode;
}> = ({ testId, children }) => {
  return <div data-testid={testId}>{children}</div>;
};
describe('Test TreeSelect Component', () => {
  it('should render correctly TreeSelect with default props', () => {
    const handleChangeTreeItem = jest.fn(() => {});
    const { getByTestId } = render(
      <TreeSelectWrap testId="tree-select-01">
        <TreeSelect
          data={simpleData}
          onChangeTreeItem={handleChangeTreeItem}
        ></TreeSelect>
      </TreeSelectWrap>,
    );
    const wrapElement = getByTestId('tree-select-01');
    expect(wrapElement).toBeInTheDocument();
    const treeSelectElement = wrapElement.querySelector(
      `.${prefixCls}-tree-select`,
    );
    expect(treeSelectElement).toBeInTheDocument();
    const length = simpleData.length;
    const sidebarItems = treeSelectElement?.querySelectorAll(
      `.${prefixCls}-tree-select-sidebar-item`,
    );
    expect(sidebarItems).toHaveLength(length);
    const firstItem = sidebarItems?.[0];
    expect(firstItem?.textContent).toBe(simpleData[0].label);
    expect(firstItem).toHaveClass(
      `${prefixCls}-tree-select-sidebar-item-active`,
    );
    const contentItems = treeSelectElement?.querySelectorAll(
      `.${prefixCls}-tree-select-content-item`,
    );
    fireEvent.click(contentItems![0]);
    expect(handleChangeTreeItem).toHaveBeenCalled();
  });

  it('should trigger onChangeTree with the correct index and className', () => {
    const onChangeTree: (item: TreeSidebarProps, index: number) => void =
      jest.fn(() => {});
    const { getByTestId } = render(
      <TreeSelectWrap testId="tree-select-02">
        <TreeSelect data={simpleData} onChangeTree={onChangeTree}></TreeSelect>
      </TreeSelectWrap>,
    );
    const wrapElement = getByTestId('tree-select-02');
    const treeSelectElement = wrapElement.querySelector(
      `.${prefixCls}-tree-select`,
    );
    const sidebarItems = treeSelectElement?.querySelectorAll(
      `.${prefixCls}-tree-select-sidebar-item`,
    );
    const secondSideBarItem = sidebarItems?.[1] as HTMLElement;
    fireEvent.click(secondSideBarItem);
    expect(onChangeTree).toHaveBeenCalled();
    expect(onChangeTree).toHaveBeenCalledWith(simpleData[1], 1);
    expect(secondSideBarItem).toHaveClass(
      `${prefixCls}-tree-select-sidebar-item-active`,
    );
  });

  it('should render correctly TreeSelect with multiple props', () => {
    const handleChangeTreeItem: (
      item: TreeSidebarProps,
      activeId: Array<number | string> | string | number | undefined,
    ) => void = jest.fn(() => {});
    const { getByTestId } = render(
      <TreeSelectWrap testId="tree-select-03">
        <TreeSelect
          data={simpleData}
          multiple
          onChangeTreeItem={handleChangeTreeItem}
        ></TreeSelect>
      </TreeSelectWrap>,
    );
    const wrapElement = getByTestId('tree-select-03');
    const treeSelectElement = wrapElement.querySelector(
      `.${prefixCls}-tree-select`,
    );
    const contentItems = treeSelectElement?.querySelectorAll(
      `.${prefixCls}-tree-select-content-item`,
    );
    const secondContentItem = contentItems?.[1] as HTMLElement;
    const thirdContentItem = contentItems?.[2] as HTMLElement;
    fireEvent.click(secondContentItem);
    fireEvent.click(thirdContentItem);
    expect(
      treeSelectElement?.getElementsByClassName(
        `${prefixCls}-tree-select-content-item-active`,
      ).length,
    ).toBe(2);
  });

  it('should render correctly TreeSelect with disabled props', () => {
    const handleChangeTree: (item: TreeSidebarProps, index: number) => void =
      jest.fn(() => {});
    const handleChangeTreeItem: (
      item: TreeSidebarProps,
      activeId: Array<number | string> | string | number | undefined,
    ) => void = jest.fn(() => {});

    const { getByTestId } = render(
      <TreeSelectWrap testId="tree-select-04">
        <TreeSelect
          data={disabledData}
          onChangeTree={handleChangeTree}
          onChangeTreeItem={handleChangeTreeItem}
        ></TreeSelect>
      </TreeSelectWrap>,
    );
    const wrapElement = getByTestId('tree-select-04');
    const treeSelectElement = wrapElement.querySelector(
      `.${prefixCls}-tree-select`,
    );
    const sidebarItems = treeSelectElement?.querySelectorAll(
      `.${prefixCls}-tree-select-sidebar-item`,
    );
    const contentItems = treeSelectElement?.querySelectorAll(
      `.${prefixCls}-tree-select-content-item`,
    );
    sidebarItems?.forEach((item) => {
      fireEvent.click(item);
    });
    contentItems?.forEach((item) => {
      fireEvent.click(item);
    });
    expect(handleChangeTree).toHaveBeenCalledTimes(0);
    expect(handleChangeTreeItem).toHaveBeenCalledTimes(0);
  });
  it('should render custom activeColor correctly', () => {
    const backgroundColor = 'rgba(0, 0, 0, 0.5)';
    const { getByTestId } = render(
      <TreeSelectWrap testId="tree-select-05">
        <TreeSelect
          data={simpleData}
          activeColor={backgroundColor}
        ></TreeSelect>
      </TreeSelectWrap>,
    );
    const wrapElement = getByTestId('tree-select-05');
    const activeElement = wrapElement.querySelector(
      `.${prefixCls}-tree-select-sidebar-item-active`,
    );
    const span = activeElement?.querySelector('span');
    expect(span).toHaveStyle(`background-color: ${backgroundColor}`);
  });
  it('should render data is empty correctly', () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(
      <TreeSelectWrap testId="tree-select-06">
        <TreeSelect data={[]}></TreeSelect>
      </TreeSelectWrap>,
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      'The data is not a Array or the length of the data is 0',
    );
  });

  it('should render correctly activeId when activeId be set', () => {
    const handleChangeTreeItem = jest.fn(() => {});
    const { getByTestId } = render(
      <TreeSelectWrap testId="tree-select-07">
        <TreeSelect
          data={simpleData}
          activeId={[11, 12]}
          onChangeTreeItem={handleChangeTreeItem}
        ></TreeSelect>
      </TreeSelectWrap>,
    );
    const wrapElement = getByTestId('tree-select-07');
    const treeSelectElement = wrapElement.querySelector(
      `.${prefixCls}-tree-select`,
    );
    const activeElements = treeSelectElement?.querySelectorAll(
      `.${prefixCls}-tree-select-content-item-active`,
    );
    expect(activeElements?.length).toBe(2);
    const firstItem = activeElements?.[0] as HTMLElement;
    fireEvent.click(firstItem);
    expect(handleChangeTreeItem).toHaveBeenCalled();
  });

  it('should render correctly multiple onChangeTreeItem when activeId be not set', () => {
    const handleChangeTreeItem = jest.fn(() => {});
    const { getByTestId } = render(
      <TreeSelectWrap testId="tree-select-08">
        <TreeSelect
          data={simpleData}
          multiple
          onChangeTreeItem={handleChangeTreeItem}
        ></TreeSelect>
      </TreeSelectWrap>,
    );
    const wrapElement = getByTestId('tree-select-08');
    const treeSelectElement = wrapElement.querySelector(
      `.${prefixCls}-tree-select`,
    );
    const elements = treeSelectElement?.querySelectorAll(
      `.${prefixCls}-tree-select-content-item`,
    );
    const firstItem = elements?.[0] as HTMLElement;
    fireEvent.click(firstItem);
    expect(handleChangeTreeItem).toHaveBeenCalled();
  });
});
