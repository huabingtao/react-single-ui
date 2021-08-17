import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal, { Action, ModalProps } from './modal';

// interface AlretProps {
//     title: React.ReactNode,
//     message: React.ReactNode,
//     footer: []
// }

export function Alert({ ...props }: ModalProps<React.CSSProperties>) {
  const { title, message, footer } = props;
  const div: any = document.createElement('div');
  document.body.appendChild(div);
  let visible = true;
  function close() {
    visible = false;
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const footDom = footer.map((button: Action<React.CSSProperties>) => {
    // tslint:disable-next-line:only-arrow-functions
    const orginPress = button.onPress || function () {};
    // console.log('button:', button);

    button.onPress = () => {
      const res = orginPress();
      console.log('res:', res);
      if (res && res.then) {
        res
          .then(() => {
            close();
          })
          .catch(() => {});
      } else {
        close();
      }
    };
    return button;
  });

  ReactDOM.render(
    <Modal
      visible={visible}
      title={title}
      message={message}
      footer={footDom}
    ></Modal>,
    div,
  );
}
