import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { prefixCls } from '../../utils';
import { useEffect } from 'react';
import { useState } from 'react';

export interface ProgressProps {
  /**
   * @description 进度条百分比 0~100
   */
  percent: number;
  /**
   * @description 设置为 true 将吸附到顶部
   */
  fixed?: boolean;
  /**
   * @description 是否显示填充轨道默认填充
   */
  unfilled?: boolean;
  /**
   * @description 进度条颜色
   */
  color?: string;
  /**
   * @description 轨道颜色
   */
  trackColor?: string;
  /**
   * @description 是否展示进度文字
   * @default false
   */
  showPivot?: boolean;
  /**
   * @description pivote 文字
   */
  pivoteText?: string;
  /**
   * @description 进度文字颜色
   */
  textColor?: string;
  /**
   * @description 进度文字背景颜色
   */
  pivotColor?: string;
  /**
   * @description 是否置灰
   */
  inactive?: boolean;
  /**
   * @description 进度条包裹层样式
   */
  wrapStyle?: React.CSSProperties;
  /**
   * @description 进度条样式
   */
  percentStyle?: React.CSSProperties;
}

const ProgressPrefixCls = prefixCls + '-progress';

const Progress: React.FC<ProgressProps> = (props) => {
  let {
    children,
    percent,
    fixed,
    unfilled,
    color,
    trackColor,
    showPivot,
    pivoteText,
    textColor,
    pivotColor,
    inactive,
    wrapStyle,
    percentStyle,
  } = props;

  let barRef: HTMLDivElement | null;
  let wrapRef: HTMLDivElement | null;
  let pivotRef: HTMLDivElement | null;

  const wrapCls = classNames(ProgressPrefixCls, `${ProgressPrefixCls}-wrap`, {
    [`${ProgressPrefixCls}-wrap-fixed`]: fixed,
  });
  const background = unfilled
    ? { background: 'transparent' }
    : { background: trackColor };
  wrapStyle = {
    ...background,
    ...wrapStyle,
  };

  const percentCls = classNames(`${ProgressPrefixCls}-bar`);

  percentStyle = {
    width: `${percent}%`,
    background: inactive ? 'rgb(202, 202, 202)' : color,
    ...percentStyle,
  };

  const renderPivot = () => {
    if (barRef) {
      console.log('barRef.style.width:', barRef.style.width);
    }
    const text = pivoteText || `${percent}%`;

    if (!showPivot) return '';
    const style = {
      color: textColor,
      background: inactive ? 'rgb(202, 202, 202)' : pivotColor,
      left: `${pivotLeft}px`,
    };
    return (
      <span
        ref={setPivotRef}
        style={style}
        className={`${ProgressPrefixCls}-bar-pivot`}
      >
        {text}
      </span>
    );
  };

  const setWrapRef = (el: any) => {
    wrapRef = el;
  };
  const setBarRef = (el: any) => {
    barRef = el;
  };
  const setPivotRef = (el: any) => {
    pivotRef = el;
  };

  const [pivotLeft, setPivotLeft] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (barRef && wrapRef && pivotRef) {
        setPivotLeft(
          ((wrapRef.offsetWidth - pivotRef.offsetWidth) * +percent) / 100 ||
            barRef.offsetWidth,
        );
      }
    }, 10);
  }, []);

  return (
    <div
      ref={setWrapRef}
      className={wrapCls}
      style={wrapStyle}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={percentCls} style={percentStyle} ref={setBarRef}>
        {renderPivot()}
      </div>
    </div>
  );
};

export default Progress;
