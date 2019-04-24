import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import Routes from './components/Routes/Routes';
import Header from './components/Organisms/Header';
import WelcomeSection from './components/Molecules/WelcomeSection';
import TechnologySection from './components/Molecules/TechnologySection';
import FollowSection from './components/Molecules/FollowSection';

class App extends Component {
  render() {
    return (
      <Router>
         <Header/>
         <WelcomeSection />
         <TechnologySection />
         <FollowSection />
        <Routes authed={false} />
      </Router>
    );
  }
}

export default App;
