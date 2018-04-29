import React from 'react';
import Cel from '../Cel';
import * as _map from 'lodash/map';
import EditRowModal from '../EditRowModal'


const keyGen = (row, data) => `${row.id} - ${data}`;
const Row = ({ row }) => {
  return (
    <tr>
      {_map(row, data => {
        return <Cel key={keyGen(row, data)} data={data} info={row.id} />;
      })}
      <EditRowModal/>
    </tr>
  );
};

export default Row;
