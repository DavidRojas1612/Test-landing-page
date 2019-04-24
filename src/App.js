import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import NavBar from './components/Molecules/NavBar';
import Routes from './components/Routes/Routes';

class App extends Component {
  render() {
    return (
      <div className="header">
        <Router>
          <NavBar/>
          <Routes authed={true} />
        </Router>
      </div>
    );
  }
}

export default App;
