import React, { Component } from 'react';
import { BrowserRouter as Router, Match } from 'react-router';
import Examples from './pages/Examples';
import Home from './pages/Home';
import Components from './pages/Components';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div >
          <Header {...console.log(this.props)}/>
          <Match exactly pattern='/' component={Home} />
          <Match pattern='/components' component={Components} />
          <Match pattern='/examples' component={Examples} />          
        </div>
      </Router>
    );
  }
}

export default App;
