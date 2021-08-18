import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal, { Action, ModalProps } from './modal';
const _ = require('lodash');

// interface AlretProps {
//     title: React.ReactNode,
//     message: React.ReactNode,
//     footer: []
// }

export function Alert({ ...props }: ModalProps<React.CSSProperties>) {
  const { title, message, footer } = props;
  let cloneFooter = _.cloneDeep(footer);
  const div: any = document.createElement('div');
  document.body.appendChild(div);
  let closed = false;
  function close() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const footDom = cloneFooter.map((button: Action<React.CSSProperties>) => {
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
