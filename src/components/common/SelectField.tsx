import React, { ChangeEvent } from 'react';

type TOwnProps = {
  label: string;
  value?: string | number;
  opts: string[] | number[];
  onSelect?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectField = (props: TOwnProps) => {
  const { label, value, opts, onSelect } = props;
  return (
    <div>
      <h5>{label}</h5>
      <select value={value} onChange={onSelect}>
        {opts.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};
export default SelectField;
