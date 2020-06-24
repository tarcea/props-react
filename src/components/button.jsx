import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isDisplayed: true,
      counter: this.props.start || 0
    };
  }

  countUp = () => {

    this.setState(state => ({counter: this.state.counter + 1}))
  };
  countDown = () => {

    this.setState(state => ({counter: this.state.counter - 1}))
  };
  countReset = () => {
    this.setState(state => ({counter: 0}));
  };



  render() {
    return (
      <div>
      <h1>[ {this.state.counter} ]</h1>
      <button onClick={this.countDown} type="button">
        - click -
      </button>
      <button onClick={ () => { this.countReset(); this.props.toggle(); }} type="button">
        Reset counter and {this.props.hideOrShow()} the text above
      </button>
      <button onClick={this.countUp} type="button">
        + click +
      </button>
      </div>
    );
  }
}
export default Button;
