import React, { Component } from 'react';
import './App.css';
import HelloReact from './components/hello_react'
import Button from './components/button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: true,
      // counter: 0
    };
  }
  toggleShowHide = () => {
    this.setState(state => ({isDisplayed: !state.isDisplayed}));
  };

  hideOrShow = () => {
   const style1 = {color: "red"};
    const style2 = {color: "green"};

   return this.state.isDisplayed ? <span style={style1}>hide</span> : <span style={style2}>show</span>;
  }

  render() {
  // const hello = 'props from parent to child';
  // let counter = 0;
  return (
    <div className="App">
      {this.state.isDisplayed ? <HelloReact helloApp='inline props from App to HelloReact' /> : null}
      <Button toggle={this.toggleShowHide} hideOrShow={this.hideOrShow} start={ 10 } />
    </div>
  );
  }
}


export default App;
