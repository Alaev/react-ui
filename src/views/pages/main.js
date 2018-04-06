import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '../components/Table';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Table component</h1>
        <br/>
        <br/>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
