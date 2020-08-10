import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
      <NavBar />
      
      </React.Fragment>
    </Router>
  );
}

export default App;
