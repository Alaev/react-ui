import React from 'react';
import Rows from '../Rows';
import NoData from '../NoData';
import { TableContext } from '../../../../context/table';

export const TableBody = ({ tableRows }) => {
  return <tbody>{(tableRows && <Rows tableRows={tableRows} />) || <NoData message="No data found" />}</tbody>;
};

const ConnectedTableBody = () => {
  return <TableContext.Consumer>{({ tableRows }) => <TableBody tableRows={tableRows} />}</TableContext.Consumer>;
};

export default ConnectedTableBody;
