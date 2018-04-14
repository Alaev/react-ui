import React, { Component } from 'react';
import Table from '../components/Table';
import TableProvider from '../../context/table';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Table component</h1>
        <br />
        <br />
        <Table Provider={TableProvider} />

    
      </div>
    );
  }
}

export default Main;
