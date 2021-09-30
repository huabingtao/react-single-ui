import React from 'react';
import * as ReactDOM from 'react-dom';
import { prefixCls } from '../../../util';

const IS_REACT_16 = !!(ReactDOM as any).createPortal;
export interface MaskProps {
  /**
   * @description 是否显示遮罩层
   */
  visible: boolean;
  /**
   * @description 点击遮罩
   */
  onClick?: () => void;
}

const div: any = document.createElement('div');
document.body.appendChild(div);

class Mask extends React.Component<MaskProps, any> {
  constructor(props: any) {
    super(props);
  }
  container: any;
  maskDom = () => {
    return (
      <div className={`${prefixCls}-mask`} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  };

  getContainer = () => {
    if (!this.container) {
      const container = document.createElement('div');
      const containerId = `${prefixCls}-container-${new Date().getTime()}`;
      container.setAttribute('id', containerId);
      document.body.appendChild(container);
      this.container = container;
    }
    return this.container;
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
      return (ReactDOM as any).createPortal(
        this.maskDom(),
        this.getContainer(),
      );
    }
    document.body.removeEventListener('touchmove', this.preventDefault, false);
    document.body.removeEventListener('scroll', this.preventDefault, false);
    return null as any;
  }
}

export default Mask;
