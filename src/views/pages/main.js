import React, { Component } from 'react';
import Table from '../components/Table';
import TableProvider from '../../context/table';
import TableV2 from '../components/TableV2';
import TableV3 from '../components/TableV3';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Table component</h1>
        <br />
        <br />

        {/* Table one example */}
        {/* <Table Provider={TableProvider} /> */}

        <TableV2  Provider={TableProvider}/>

        {/* table 3 example */}
      </div>
    );
  }
}

export default Main;
