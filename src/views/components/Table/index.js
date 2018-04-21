import React from 'react';
import TableBody from './TableBody';
import TableForm from '../Form';

const Table = ({ Provider }) => (
  <Provider>
    <table className="table is-bordered is-fullwidth">
      <TableBody />
    </table>

    <TableForm />
  </Provider>
);

export default Table;
