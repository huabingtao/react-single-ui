import React from 'react';
import * as ReactDOM from 'react-dom';
import { prefixCls } from '../../utils';

const IS_REACT_16 = !!ReactDOM.createPortal;
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

const div: HTMLDivElement = document.createElement('div');
document.body.appendChild(div);

class Mask extends React.Component<MaskProps, HTMLDivElement> {
  container: HTMLDivElement | null = null;
  maskDom = () => {
    const { backgroundColor = '#00000066', zIndex = 999 } = this.props;
    const style = {
      backgroundColor,
      zIndex,
    };

    return (
      <div
        className={`${prefixCls}-mask`}
        onClick={this.handleClickMask}
        style={style}
      >
        {this.props.children}
      </div>
    );
  };

  handleClickMask = () => {
    // 点击遮罩层
    this.removeContainer();
    if (this.props.onMaskClick) {
      this.props.onMaskClick();
    }
  };

  getContainer = () => {
    if (!this.container) {
      const container = document.createElement('div');
      container.style.height = '100%';
      const containerId = `${prefixCls}-container-${new Date().getTime()}`;
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      this.container = container;
    }
    return this.container;
  };

  removeContainer = () => {
    if (this.container) {
      document.body.removeChild(this.container);
      this.container = null;
    }
  };

  preventDefault = (e: Event) => {
    e.preventDefault();
  };

  render() {
    const { visible } = this.props;
    if (IS_REACT_16 && visible) {
      document.body.addEventListener('touchmove', this.preventDefault, {
        passive: false,
      });
      document.body.addEventListener('scroll', this.preventDefault, {
        passive: false,
      });
      return ReactDOM.createPortal(this.maskDom(), this.getContainer());
    }
    document.body.removeEventListener('touchmove', this.preventDefault, false);
    document.body.removeEventListener('scroll', this.preventDefault, false);
    return null;
  }
}

export default Mask;
