import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { TableContext } from '../../../context/table';
import * as _map from 'lodash/map';

import {columns} from './columns';
export default class TableV2 extends Component {
  render() {
    const { Provider } = this.props;

    return (
      <Provider>
        <TableContext.Consumer>
          {({ tableRows }) =>
            <React.Fragment>
              <ReactTable
                tableRows={tableRows}
                showPaginationBottom={false}
                data={_map(tableRows, t => t)}
                columns={columns}
                defaultPageSize={5}
                className="-striped -highlight"
              />
              <span>{JSON.stringify()}</span>

            </React.Fragment>
          }
        </TableContext.Consumer>
      </Provider>
    );
  }
}
