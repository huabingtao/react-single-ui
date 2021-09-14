import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal, { Action, ModalProps } from './modal';
import _ from 'lodash';

export default function Alert(props: any) {
  const { title, message, footer } = props;

  const div: any = document.createElement('div');
  document.body.appendChild(div);
  let closed = false;
  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  let footDom: any = '';
  if (footer) {
    let cloneFooter = _.cloneDeep(footer);
    footDom = cloneFooter.map((button: Action<React.CSSProperties>) => {
      // tslint:disable-next-line:only-arrow-functions
      const orginPress = button.onPress || function () {};
      button.onPress = () => {
        if (closed) {
          return;
        }
        const res = orginPress();
        if (res && res.then) {
          res
            .then(() => {
              closed = true;
              close();
            })
            .catch(() => {});
        } else {
          closed = true;
          close();
        }
      };
      return button;
    });
  }

  ReactDOM.render(
    <Modal
      visible={true}
      title={title}
      message={message}
      footer={footDom}
    ></Modal>,
    div,
  );
}

// export default Alert
// export default function Alert({ ...props }: ModalProps<React.CSSProperties>) {

// }
