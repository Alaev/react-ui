import React from 'react';
import TableBody from './TableBody';

const Table = ({Provider, Consumer}) => (
  <Provider>
    <table className="table is-bordered is-fullwidth">
     <TableBody />
    </table>
  </Provider>
);

export default Table;
