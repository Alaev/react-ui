import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { TableContext } from '../../../context/table';
import * as _map from 'lodash/map';

export default class TableV2 extends Component {
  render() {
    const { Provider } = this.props;
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
        Cell: props => (
          <div className="has-text-centered">
            <span className="tag is-round is-info">{props.value}</span>
          </div>
        ),
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

    return (
      <Provider>
        <TableContext.Consumer>
          {({ tableRows }) =>
            <React.Fragment>
            <ReactTable
              tableRows={tableRows}
              showPaginationBottom={false}
              data={tableRows}
              columns={columns}
              defaultPageSize={5}
              className="-striped -highlight"
            />
            <span>{_map(tableRows,(t => <pre key={t.id}>{t.name}</pre>))}</span>

            </React.Fragment>
          }
        </TableContext.Consumer>
      </Provider>
    );
  }
}
