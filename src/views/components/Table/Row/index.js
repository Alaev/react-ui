import React from 'react';
import Cel from '../Cel';

import _ from 'lodash';

const Row = ({ tableRows }) => {
  return _.map(tableRows.state.tableRows, row => {
    return (
      <tr key={row.id}>
        {_.map(row, data => {
          return <Cel key={row.id + '-' + data} data={data} info={row.id} />;
        })}
      </tr>
    );
  });
};

export default Row;
