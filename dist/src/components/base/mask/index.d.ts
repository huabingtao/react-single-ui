import React from 'react';
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
declare class Mask extends React.Component<MaskProps, any> {
  constructor(props: any);
  container: any;
  maskDom: () => JSX.Element;
  getContainer: () => any;
  preventDefault: (e: Event) => void;
  render(): any;
}
export default Mask;
