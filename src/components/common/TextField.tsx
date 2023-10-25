import React, { HTMLProps } from 'react';

type TOwnProps = {
  label: string;
  inputProps?: HTMLProps<HTMLInputElement>;
};

const TextField = (props: TOwnProps) => {
  const { label, inputProps } = props;

  return (
    <div>
      <h5>{label}</h5>
      <input {...inputProps} />
    </div>
  );
};
export default TextField;
