import React, { Component } from 'react';

// TODO:
// get value from this.props.
// update the the storage with new value
// close modal on click add
// close modal on click out side
// close modal on blur

class EditRowModal extends Component {
  state = {
    open: false
  };

  show = () => this.setState(prevState => ({ open: !prevState.open }), () => console.debug('modal is shown'));

  hide = () => this.setState(prevState => ({ open: !prevState.open }), () => console.debug('modal is hidden'));

  render() {
    return (
      <React.Fragment>
        <div>hello from modal</div>
      </React.Fragment>
    );
  }
}

export default EditRowModal;
