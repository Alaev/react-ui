// testing react table in action
// https://github.com/react-tools/react-table
import React, { Component } from 'react';
import ReactTable from 'react-table';

export default class TableV2 extends Component {
  render() {
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        },
      },
    ];

    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className="number">{props.value}</span>,
      },
      {
        id: 'friendName',
        Header: 'Friend Name',
        accessor: d => d.friend.name,
      },
      {
        Header: props => <span>Friend Age</span>,
        accessor: 'friend.age',
      },
    ];

    return <ReactTable data={data} columns={columns} />;
  }
}
