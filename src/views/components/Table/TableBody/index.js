import React from 'react';
import Rows from '../Rows';
import NoData from '../NoData';
import { TableContext } from '../../../../context/table';

const TableBody = () => {
  return (
    <tbody>
      <TableContext.Consumer>{({ tableRows }) => (tableRows && <Rows tableRows={tableRows} />) || <NoData message="No data found" />}</TableContext.Consumer>
    </tbody>
  );
};

export default TableBody;
