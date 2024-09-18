// alert.tsx
import _ from 'lodash';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Modal, { Action, ModalProps } from './modal';

export default function Alert(props: ModalProps<React.CSSProperties>) {
  const { title, message, footer } = props;

  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);
  let closed = false;
  function close() {
    root.unmount();
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  let footDom: Action<React.CSSProperties>[] = [];
  if (footer) {
    const cloneFooter = _.cloneDeep(footer);
    footDom = cloneFooter.map((button) => {
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

  root.render(
    <Modal
      visible={true}
      title={title}
      message={message}
      footer={footDom}
    ></Modal>,
  );
}
