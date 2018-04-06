import React from 'react';
import Row from './Row';
import * as _map from 'lodash/map';

const Rows = ({ tableRows }) => {
  return _map(tableRows, row => {
    return <Row row={row} key={row.id} />;
  });
};

export default Rows;
