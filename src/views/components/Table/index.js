import React, { Component } from 'react';
import Row from './Row';

export const TableContext = React.createContext();

class TableProvider extends Component {
  state = {
    tableRows: {
      1: {
        id: 1,
        name: 'javascript 101',
        date: '23-01-2018',
        author: 'Bob',
        publisher: 'web',
        watched: {
          type: 'checkbox',
          value: true
        }
      },
      2: {
        id: 2,
        name: 'javascript 102',
        date: '23-01-2018',
        author: 'Bob2',
        publisher: 'web',
        watched: {
          type: 'checkbox',
          value: false
        }
      }
    }
  };

  handelCheckboxInteraction = event => {
    const target = event.target;
    const inputValue = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const newTableRawState = { ...this.state };
    newTableRawState.tableRows[name].watched.value = inputValue;

    this.setState(newTableRawState, () => {
      console.log(this.state);
    });
    return console.log(this.state);
  };

  render() {
    return (
      <TableContext.Provider
        value={{
          state: this.state,
          handelCheckboxInteraction: this.handelCheckboxInteraction
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

class Table extends Component {
  render() {
    return (
      <TableProvider>
        <table className="table is-bordered is-fullwidth">
          <tbody>
            <TableContext.Consumer>{context => <Row tableRows={context} />}</TableContext.Consumer>
          </tbody>
        </table>
      </TableProvider>
    );
  }
}

export default Table;
