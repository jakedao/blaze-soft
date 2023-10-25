import React from 'react';

import '../../styles/Toast.style.scss';
import { IToast } from '../../type';

type TOwnProps = Pick<IToast, "message" | "type">;

const Toast = (props: TOwnProps) => {
  const { type = "success", message } = props;

  return <div className={`toast toast--${type}`}>{message}</div>;
};

export default Toast;
