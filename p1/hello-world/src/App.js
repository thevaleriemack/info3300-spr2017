import React, { Component } from 'react';
import Slot from "./Slot";
import Map from "./Map";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>What is a unicorn company?</h2>
        </div>
        <p className="App-intro">
          A "unicorn" refers to a privately-held company valued over $1 billion USD. As of 2016, there are 170 unicorns globally. The first unicorn appeared in 2009. That's a 1700% increase in just {16-9} years.
        </p>
				<Slot heading="History">
					<Map />
				</Slot>
				<Slot heading="Map" />
      </div>
    )
  }
}

export default App;

