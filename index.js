import React, { Component } from 'react';
import { render } from 'react-dom';

//React Component
function Hello (){
  return <h1> bienvenido a React </h1>
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
      <div>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
