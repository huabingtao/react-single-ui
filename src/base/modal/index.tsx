import React from 'react';
import Modal from 'antd-mobile/lib/modal/index';

type button = {
  title: string;
  onPress: Function;
};

export interface ModalProps {
  title: string;
  message: string;
  footer: Array<button>;
}

type Alert = {
  alert: () => {};
};

const HModal: React.FC<ModalProps> | Alert = (props) => {
  const { title, message } = props;
  return (
    <Modal title={title} visible={true} transparent={true} maskClosable={false}>
      <div>{message}</div>
    </Modal>
  );
};

HModal.alert = () => {};

export default HModal;
