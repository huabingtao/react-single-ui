import classNames from 'classnames';
import React, { useLayoutEffect, useRef } from 'react';

import { useState } from 'react';
import { prefixCls } from '../../utils';

export interface ProgressProps {
  /**
   * @description 进度条百分比 0~100
   */
  percent: number;
  /**
   * @description 设置为 true 将吸附到顶部
   * @default false
   */
  fixed?: boolean;
  /**
   * @description 是否显示填充轨道默认填充
   * @default true
   */
  unfilled?: boolean;
  /**
   * @description 进度条颜色
   * @default #0d6efd
   */
  color?: string;
  /**
   * @description 轨道颜色
   * @default #ebedf0
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
   * @default #1989fa
   */
  pivotColor?: string;
  /**
   * @description 是否置灰
   * @default false
   */
  inactive?: boolean;
  /**
   * @description 自定义进度条包裹层样式
   */
  wrapStyle?: React.CSSProperties;
  /**
   * @description 自定义进度条样式
   */
  percentStyle?: React.CSSProperties;
  /**
   * @description 子节点
   */
  children?: React.ReactNode;
}

export const ProgressPrefixCls = prefixCls + '-progress';
export const percentCls = classNames(`${ProgressPrefixCls}-bar`);
const Progress: React.FC<ProgressProps> = (props) => {
  const {
    percent,
    fixed = false,
    unfilled,
    color,
    trackColor,
    showPivot,
    pivoteText,
    textColor,
    pivotColor,
    inactive,
    children,
  } = props;
  let { wrapStyle, percentStyle } = props;

  const barRef = useRef<HTMLDivElement | null>(null); // 使用 useRef
  const wrapRef = useRef<HTMLDivElement | null>(null); // 使用 useRef
  const pivotRef = useRef<HTMLDivElement | null>(null); // 使用 useRef

  const wrapCls = classNames(ProgressPrefixCls, `${ProgressPrefixCls}-wrap`, {
    [`${ProgressPrefixCls}-wrap-fixed`]: fixed,
    [`${ProgressPrefixCls}-inactive`]: inactive,
  });
  const background = unfilled
    ? { background: 'transparent' }
    : { background: trackColor };
  wrapStyle = {
    ...background,
    ...wrapStyle,
  };

  percentStyle = {
    width: `${percent}%`,
    backgroundColor: inactive ? 'rgb(202, 202, 202)' : color,
    ...percentStyle,
  };

  const renderPivot = () => {
    const text = pivoteText || `${percent}%`;
    if (!showPivot) return '';

    const style = {
      color: textColor,
      background: inactive ? 'rgb(202, 202, 202)' : pivotColor,
      left: `${pivotLeft}px`,
    };
    return (
      <span
        ref={pivotRef}
        style={style}
        className={`${ProgressPrefixCls}-bar-pivot`}
      >
        {text}
        {children}
      </span>
    );
  };

  // const setWrapRef = (el: HTMLDivElement) => {
  //   wrapRef = el;
  // };
  // const setBarRef = (el: HTMLDivElement) => {
  //   barRef = el;
  // };
  // const setPivotRef = (el: HTMLDivElement) => {
  //   pivotRef = el;
  // };

  const [pivotLeft, setPivotLeft] = useState(0);

  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      if (barRef.current && wrapRef.current && pivotRef.current) {
        // 计算 pivotLeft，确保 pivot（进度文字）显示在正确位置
        setPivotLeft(
          ((wrapRef.current.offsetWidth - pivotRef.current.offsetWidth) *
            +percent) /
            100 || barRef.current.offsetWidth,
        );
      }
    }, 10);

    return () => {
      // 清除 timeout，防止内存泄漏
      clearTimeout(timeoutId);
    };
  }, [percent]);

  return (
    <div
      ref={wrapRef}
      className={wrapCls}
      style={wrapStyle}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={percentCls} style={percentStyle} ref={barRef}>
        {renderPivot()}
      </div>
    </div>
  );
};

export default Progress;
