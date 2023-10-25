import React, { ChangeEvent } from 'react';

type TOwnProps = {
  label: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextField = (props: TOwnProps) => {
  const { label, ...rest } = props;

  return (
    <div>
      <h5>{label}</h5>
      <input {...rest} />
    </div>
  );
};
export default TextField;
