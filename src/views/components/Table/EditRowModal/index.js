import React, { Component } from 'react';
import styled from 'styled-components';

// TODO:
// done - update the the storage with new value on click
// close modal on click add
// close modal on click out side
// close modal on blur


const Td = styled.td`
  text-align:center;
  
  :hover{
    cursor: pointer
  }
`

const Tag = styled.span`
  border: 1px solid red;
  background-color: red;
  color: white;
  border-radius: 25px;
  padding:1px 10px;
`

class EditRowModal extends Component {
  state = {
    open: false
  };

  show = () => this.setState(prevState => ({ open: !prevState.open }), () => console.debug('modal is shown'));

  hide = () => this.setState(prevState => ({ open: !prevState.open }), () => console.debug('modal is hidden'));

  render() {
    return (
      <React.Fragment>
       {
         this.state.open ?  <Td onClick={this.hide}>hello from modal</Td> : <Td onClick={this.show}> <Tag>Edit</Tag></Td>
       }
      </React.Fragment>
    );
  }
}

export default EditRowModal;
