import React from 'react';
import Cel from '../Cel';
import * as _map from 'lodash/map';

const keyGen = (row, data) => `${row.id} - ${data}`;
const Row = ({ row }) => {
  return (
    <tr>
      {_map(row, data => {
        return <Cel key={keyGen(row, data)} data={data} info={row.id} />;
      })}
    </tr>
  );
};

export default Row;
