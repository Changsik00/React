import React, { Component } from 'react';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  state = {number : 10}
  render() {
    return (
      <div className="App">
        <AddNumberRoot onClick={function(size) {
          this.setState({number: this.state.number + size}) 
        }.bind(this)}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
  
}
export default App;
