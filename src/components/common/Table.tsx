import React, { ReactNode } from 'react';

import { TColConfig } from '../../type/table';

type TOwnProps = {
  colConfigs: TColConfig;
  children?: ReactNode;
};

const Table = (props: TOwnProps) => {
  const { colConfigs, children } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          {colConfigs.map(({ id, text, width = "auto", align = "center" }) => (
            <td key={id} width={width} align={align}>
              {text}
            </td>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};
export default Table;
