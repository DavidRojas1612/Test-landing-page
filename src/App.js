import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss';
import Routes from './components/Routes/Routes';
import { connect } from 'react-redux'
import Header from './components/Organisms/Header';


const App = ({authed}) =>  (
  <Router>
     <Header/>
    <Routes authed={authed} />
  </Router>
);

const mapStateToProps = ({ authed }) => ({ authed })

export default connect(
  mapStateToProps
)(App)
