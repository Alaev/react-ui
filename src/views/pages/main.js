import React, { Component } from 'react';
import Table from '../components/Table';
import TableProvider from '../../context/table';
import TableV2 from '../components/TableV2';
class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Table component</h1>
        <br />
        <br />
        {/* <Table Provider={TableProvider} /> */}

        <TableV2 />
      </div>
    );
  }
}

export default Main;
