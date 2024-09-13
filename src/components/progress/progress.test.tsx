import { render, waitFor } from '@testing-library/react';
import Progress, { ProgressPrefixCls, percentCls } from '.';
import React from 'react';

const TestProgressWrap: React.FC<{
  testId?: string;
  children: React.ReactNode;
}> = ({ testId, children }) => {
  return <div data-testid={testId}>{children}</div>;
};

describe('Test Progress Component', () => {
  const renderProgress = (
    props: Partial<React.ComponentProps<typeof Progress>>,
    testId: string,
  ) => {
    const { getByTestId } = render(
      <TestProgressWrap testId={testId}>
        <Progress percent={30} {...props} />
      </TestProgressWrap>,
    );
    const wrap = getByTestId(testId);
    return wrap.querySelector('div')!;
  };

  it('should render correctly base Progress', () => {
    const wrapElement = renderProgress({}, 'test-progress-01');

    expect(wrapElement).toBeInTheDocument();
    expect(wrapElement).toHaveClass(ProgressPrefixCls);
    expect(wrapElement).toHaveAttribute('aria-valuenow', '30');
    expect(wrapElement.querySelector(`.${percentCls}`)).toHaveStyle({
      width: '30%',
    });
    expect(wrapElement.querySelector(`.${percentCls}`)).toHaveClass(percentCls);
  });

  it('should render showPivot and change pivote text', () => {
    const wrapElement = renderProgress(
      { showPivot: true, pivoteText: 'total' },
      'test-progress-02',
    );

    expect(wrapElement).toBeInTheDocument();
    const pivot = wrapElement.querySelector('span');
    expect(pivot).toBeInTheDocument();
    expect(pivot).toHaveTextContent('total');
  });

  it('should render unfilled', () => {
    const wrapElement = renderProgress({ unfilled: true }, 'test-progress-03');

    expect(wrapElement).toBeInTheDocument();
    expect(wrapElement).toHaveStyle({ background: 'transparent' });
  });

  it('should render custom pivotColor, color, pivoteText, and width props', async () => {
    const wrapElement = renderProgress(
      {
        showPivot: true,
        pivotColor: '#f7f7f7',
        color: '#0d6efd',
        pivoteText: '文本',
      },
      'test-progress-04',
    );

    expect(wrapElement).toBeInTheDocument();
    const pivot = wrapElement.querySelector('span');
    expect(pivot).toBeInTheDocument();

    await waitFor(() => {
      expect(wrapElement.querySelector(`.${percentCls}`)).toHaveStyle({
        width: '30%',
        backgroundColor: '#0d6efd',
      });
    });
  });

  it('should render inactive Progress', () => {
    const wrapElement = renderProgress({ inactive: true }, 'test-progress-05');

    expect(wrapElement).toBeInTheDocument();
    expect(wrapElement).toHaveClass(`${ProgressPrefixCls}-inactive`);
  });

  it('should render fixed Progress', () => {
    const wrapElement = renderProgress({ fixed: true }, 'test-progress-06');

    expect(wrapElement).toBeInTheDocument();
    expect(wrapElement).toHaveClass(`${ProgressPrefixCls}-wrap-fixed`);
  });
});
