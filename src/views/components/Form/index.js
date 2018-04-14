import React, { Component } from 'react';
import { TableContext } from '../../../context/table';

class TableForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: '',
    date: '',
    author: '',
    type: ''
  };

  handelFormChange = () => {};

  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Name:</label>
          <input type="text" />
          <br />

          <label htmlFor="">Date:</label>
          <input type="text" />
          <br />

          <label htmlFor="">Author:</label>
          <input type="text" />
          <br />

          <label htmlFor="">Type:</label>
          <input type="text" />
          <br />
        </form>
        <button onClick={() => this.props.handelAddRow(this.state)}>Add</button>
      </div>
    );
  }
}

const ConnectedTableForm = props => {
  return <TableContext.Consumer>{({ actions }) => <TableForm {...props} {...actions} />}</TableContext.Consumer>;
};

export default ConnectedTableForm;
