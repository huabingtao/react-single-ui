import React from 'react';
import Dialog from 'rmc-dialog';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TouchFeedback from 'rmc-feedback';
import { prefixCls } from '../../../util';
import Modal from './modal';
import { Alert } from './alert';

//@ts-ignore
Modal.alert = Alert;

export default Modal;
