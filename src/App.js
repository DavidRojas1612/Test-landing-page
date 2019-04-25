import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import Routes from './components/Routes/Routes';
import Header from './components/Organisms/Header';


class App extends Component {
  render() {
    return (
      <Router>
         <Header/>
        <Routes authed={false} />
      </Router>
    );
  }
}

export default App;
