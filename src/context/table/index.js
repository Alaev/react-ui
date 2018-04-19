import React, { Component } from 'react';
import INIT_DATA from './initData';
export const TableContext = React.createContext();
export default class TableProvider extends Component {
  state = {
    tableRows: null
  };

  componentDidMount() {
    this.setState({ tableRows: INIT_DATA }, () => console.log('data loaded'));
  }

  handelCheckboxInteraction = event => {
    const target = event.target;
    const inputValue = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const newTableRawState = { ...this.state };
    newTableRawState.tableRows[name].watched.value = inputValue;

    this.setState(newTableRawState, () => {
      console.log(this.state);
    });
  };

  handelAddRow = newRow => {
    const randomId = Math.random();
    newRow.id = randomId;
    const newTableRawState = { ...this.state };
    newTableRawState.tableRows[randomId] = newRow;

    this.setState(newRow, () => {
      console.log('new state', this.state);
    });
  };

  render() {
    return (
      <TableContext.Provider
        value={{
          ...this.state,
          actions: {
            handelCheckboxInteraction: this.handelCheckboxInteraction,
            handelAddRow: this.handelAddRow
          }
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}
