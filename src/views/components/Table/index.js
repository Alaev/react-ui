import React, { Component } from 'react';
import Rows from './Rows';
import NoData from './NoData';
import INIT_DATA from './initData';

class TableProvider extends Component {
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
    return console.log(this.state);
  };

  render() {
    return (
      <TableContext.Provider
        value={{
          ...this.state,
          actions: {
            handelCheckboxInteraction: this.handelCheckboxInteraction
          }
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

const Table = () => (
  <TableProvider>
    <table className="table is-bordered is-fullwidth">
      <tbody>
        <TableContext.Consumer>{({ tableRows }) => (tableRows && <Rows tableRows={tableRows} />) || <NoData message="No data found" />}</TableContext.Consumer>
      </tbody>
    </table>
  </TableProvider>
);

export default Table;
export const TableContext = React.createContext();
