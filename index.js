import React, { Component } from 'react';
import { render } from 'react-dom';

//React Component
function Hello (){
  //return <h1> bienvenido a React </h1>
return React.createElement('h1',null,'bienvenido a react')
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      
      React.createElement('div',null,Hello())
    );
  }
}

render(<App />, document.getElementById('root'));
