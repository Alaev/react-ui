import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Card extends Component {
  state = {
    id: 1,
    count: 0
  };

  handelAdd = () => {
    this.props.logAction('handelAdd clicked');
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  handelSubtract = () => {
    this.props.logAction('HandelSubtract clicked');
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  };

  render() {
    return (
      <div>
        <p>Component state: </p> <pre>{JSON.stringify(this.state, null, 2)}</pre>
        {this.props.children && <p>components children</p>}
        {this.props.children}
        {this.props.actions && (
          <React.Fragment>
            <button onClick={this.handelAdd}>ADD</button>
            <button onClick={this.handelSubtract}>SUBTRACT</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}
