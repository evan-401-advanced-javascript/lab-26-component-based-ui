import React from 'react';

import Header from './components/header'
import Footer from './components/footer'
import './style/app.scss'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }



  handleButtonUp = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
    if(this.state.counter > 0) {
      this.setState({
       bgColor: 'red' 
      })
    }
  };

  handleButtonDown = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
    if(this.state.counter < 0) {
      this.setState({
       bgColor: 'blue' 
      })
    }
  };

  render() {
    return (
      <div style={{background: this.state.bgColor}}>
        <h4 style={{fontSize: (this.state.counter+3) * 5}}>{this.state.counter}</h4>
        <button style={{marginLeft: Math.random()*100, marginTop: Math.random()*100}} onClick={this.handleButtonUp}>Numba go up</button>
        <button style={{marginLeft: Math.random()*200, marginTop: Math.random()*200, marginBottom: Math.random()*200}} onClick={this.handleButtonDown}>Numba go down</button>
        
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
