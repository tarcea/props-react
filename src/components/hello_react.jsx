import React, { Component } from 'react';

// class HelloReact extends Component {
//   render() {

//     return (
//       <div>
//         <h1>{this.props.helloApp}</h1>
//       </div>
//     );
//   }
// }

// const HelloReact = (props) => {
//   return <h1>{props.helloApp}</h1>;
// }

// const HelloReact = props => <h1>{props.helloApp}</h1>;

const HelloReact = ({ helloApp, isDisplayed }) => <h1>{helloApp}</h1> ;

export default HelloReact;
