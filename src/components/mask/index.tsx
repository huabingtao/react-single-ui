import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { prefixCls } from '../../utils';
import './_index.scss';

export interface MaskProps {
  /**
   * @description 是否显示遮罩层
   */
  visible: boolean;
  /**
   * @zIndex 遮罩层级
   * @default 999
   */
  zIndex?: number;
  /**
   * className 自定义类名
   * @default ''
   */
  className?: string;
  /**
   * @description 点击遮罩
   */
  onMaskClick?: () => void;
  /**
   * @children  子节点
   */
  children?: React.ReactNode;
  /**
   * @color 遮罩颜色
   * @default '#00000066'
   */
  backgroundColor?: string;
}

const Mask: React.FC<MaskProps> = ({
  visible = false,
  className,
  backgroundColor = '#00000066',
  zIndex = 999,
  onMaskClick,
  children,
}) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  // 创建 container 并在组件卸载时移除
  useEffect(() => {
    // console.log('useEffect visible:', visible); // 将日志放在 useEffect 中
    if (visible) {
      const newContainer = document.createElement('div');
      newContainer.style.height = '100%';
      const containerId = `${prefixCls}-container-${new Date().getTime()}`;
      newContainer.setAttribute('id', containerId);
      document.body.appendChild(newContainer);
      setContainer(newContainer);

      // 禁用滚动
      const preventDefault = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      };
      document.body.addEventListener('touchmove', preventDefault, {
        passive: false,
      });
      document.body.addEventListener('scroll', preventDefault, {
        passive: false,
      });

      return () => {
        document.body.removeChild(newContainer);
        document.body.removeEventListener('touchmove', preventDefault);
        document.body.removeEventListener('scroll', preventDefault);
      };
    }
  }, [visible]);

  // 处理遮罩点击
  const handleClickMask = () => {
    if (onMaskClick) {
      onMaskClick();
    }
  };

  const classes = `${prefixCls}-mask ${className}`;

  const maskDom = (
    <div
      className={classes}
      onClick={handleClickMask}
      style={{ backgroundColor, zIndex }}
    >
      {children}
    </div>
  );

  if (visible && container) {
    return createPortal(maskDom, container);
  }

  return null;
};

export default Mask;
