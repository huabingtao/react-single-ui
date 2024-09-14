import { render } from '@testing-library/react';
import React from 'react';
import Badge, { BadegProps, BadgePrefixCls } from './index';

const TestWrapper: React.FC<{ testId: string; children: React.ReactNode }> = ({
  testId,
  children,
}) => {
  return <div data-testid={testId}>{children}</div>;
};
const style = {
  width: '40px',
  height: '40px',
  background: '#f2f3f5',
  borderRadius: '4px',
};
describe('Test Badge component', () => {
  const renderBadge = (testId: string, props: BadegProps) => {
    const { getByTestId } = render(
      <TestWrapper testId={testId}>
        <Badge {...props}>
          <div style={style}></div>
        </Badge>
      </TestWrapper>,
    );
    return getByTestId(testId).querySelector(`.${BadgePrefixCls}`)!;
  };

  it('Should render Badge component', () => {
    const badgeElement = renderBadge('test-badge-01', { content: 1 });
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent('1');
  });

  it('should render dot Badge component', () => {
    const badgeElement = renderBadge('test-badge-02', { dot: true });
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(`${BadgePrefixCls}-dot`);
  });

  it('should render fixed Badge component', () => {
    const badgeElement = renderBadge('test-badge-03', {
      content: 1,
      fixed: true,
    });
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(`${BadgePrefixCls}-fixed`);
  });

  it('should render max Badge component', () => {
    const badgeElement = renderBadge('test-badge-04', { content: 11, max: 10 });
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent('10+');
  });

  it('should render lg size Badge component', () => {
    const badgeElement = renderBadge('test-badge-05', {
      dot: true,
      size: 'lg',
    });
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass(`${BadgePrefixCls}-dot-large`);
  });

  it('should render custom style Badge component', () => {
    const badgeElement = renderBadge('test-badge-06', {
      dot: true,
      color: '#0d6efd',
    });
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveStyle({ background: '#0d6efd' });
  });

  it('should render font Badge', () => {
    const badgeElement = renderBadge('test-badge-07', { content: 'new' });
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent('new');
  });
});
