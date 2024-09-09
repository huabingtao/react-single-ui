import { fireEvent, render } from '@testing-library/react';
import Switch from '.';
import React from 'react';
import { prefixCls } from '../../utils';

const TestSwitchWrapper: React.FC<{
  testId: string;
  children: React.ReactNode;
}> = ({ testId, children }) => {
  return <div data-testid={testId}>{children}</div>;
};

describe('Test Switch component', () => {
  it('should render correctly default Switch component', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <TestSwitchWrapper testId="switch-01">
        <Switch value={false} onClick={handleClick}></Switch>
      </TestSwitchWrapper>,
    );
    const wrapElement = getByTestId('switch-01');
    expect(wrapElement).toBeInTheDocument();
    const switchElement = wrapElement.querySelector(
      `.${prefixCls}-switch`,
    ) as HTMLElement;
    expect(switchElement).toBeInTheDocument();
    fireEvent.click(switchElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(switchElement).toHaveClass(`${prefixCls}-switch-active`);
  });

  it('should render correctly Switch component width different size props', () => {
    const { getByTestId } = render(
      <TestSwitchWrapper testId="switch-03">
        <Switch value={false} size="lg"></Switch>
        <Switch value={false} size="sm"></Switch>
      </TestSwitchWrapper>,
    );
    const wrapElement = getByTestId('switch-03');
    expect(wrapElement.querySelectorAll(`.${prefixCls}-switch`)).toHaveLength(
      2,
    );
    expect(
      wrapElement.querySelector(`.${prefixCls}-switch-lg`),
    ).toBeInTheDocument();
    expect(
      wrapElement.querySelector(`.${prefixCls}-switch-sm`),
    ).toBeInTheDocument();
  });

  it('should render correctly disabled Switch component', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <TestSwitchWrapper testId="switch-02">
        <Switch value={false} onClick={handleClick} disabled></Switch>
      </TestSwitchWrapper>,
    );
    const wrapElement = getByTestId('switch-02');
    expect(wrapElement).toBeInTheDocument();
    const switchElement = wrapElement.querySelector(
      `.${prefixCls}-switch`,
    ) as HTMLElement;
    fireEvent.click(switchElement);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('should render correctly Switch component by different custom style', () => {
    const { getByTestId } = render(
      <TestSwitchWrapper testId="switch-04">
        <Switch
          value={false}
          activeColor="#ff0000"
          inactiveColor="#00ff00"
        ></Switch>
      </TestSwitchWrapper>,
    );
    const wrapElement = getByTestId('switch-04');
    expect(wrapElement).toBeInTheDocument();
    const switchElement = wrapElement.querySelector(
      `.${prefixCls}-switch`,
    ) as HTMLElement;
    expect(switchElement).toHaveStyle({
      backgroundColor: '#00ff00',
    });
    fireEvent.click(switchElement);
    expect(switchElement).toHaveStyle({
      backgroundColor: '#ff0000',
    });
  });
});
