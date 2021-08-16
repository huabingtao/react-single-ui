import React from 'react';
import * as ReactDOM from 'react-dom';
import { prefixCls } from '../../../util';
import './index.scss';

const IS_REACT_16 = !!(ReactDOM as any).createPortal;
export interface MaskProps {
  /**
   * @description
   */
  visible: boolean;
  /**
   * @description
   */
  onClick?: () => void;
}

const div: any = document.createElement('div');
document.body.appendChild(div);

class Mask extends React.Component<MaskProps, any> {
  constructor(props) {
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

  render() {
    const { visible } = this.props;
    if (IS_REACT_16 && visible) {
      return (ReactDOM as any).createPortal(
        this.maskDom(),
        this.getContainer(),
      );
    }
    return null as any;
  }
}

export default Mask;
