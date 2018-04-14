import React, {Component} from 'react';
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

  handelAddRow = (state) => {
    console.log(state);
  }

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