import React, { Component } from 'react';
import { TableContext } from '../../../context/table';

class TableForm extends Component {
  state = {
    name: '',
    date: '',
    author: '',
    type: '',
    publisher: '',
    watched:{
      type: 'checkbox',
      value: false
    }
  };

  handelFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="" >Name:</label>
          <input type="text" name="name" onChange={this.handelFormChange}/>
          <br />

          <label htmlFor="" >Date:</label>
          <input type="text" name="date" onChange={this.handelFormChange}/>
          <br />

          <label htmlFor="" >Author:</label>
          <input type="text" name="author" onChange={this.handelFormChange} />
          <br />

          <label htmlFor="" >Type:</label>
          <input type="text" name="type" onChange={this.handelFormChange} />
          <br />

           <label htmlFor="" >Type:</label>
          <input type="text" name="publisher" onChange={this.handelFormChange} />
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
