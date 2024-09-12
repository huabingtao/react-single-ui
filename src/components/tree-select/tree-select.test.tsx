import React from 'react';
import TreeSelect from '.';
import { disabledData, simpleData } from './demo/data';
import { fireEvent, render } from '@testing-library/react';
import { prefixCls } from '../../utils';
import { TreeSidebarProps } from './index.d';

const TreeSelectWrap: React.FC<{
  testId: string;
  children: React.ReactNode;
}> = ({ testId, children }) => {
  return <div data-testid={testId}>{children}</div>;
};
describe('Test TreeSelect Component', () => {
  it('should render correctly TreeSelect with default props', () => {
    const { getByTestId } = render(
      <TreeSelectWrap testId="tree-select-01">
        <TreeSelect data={simpleData}></TreeSelect>
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
});
