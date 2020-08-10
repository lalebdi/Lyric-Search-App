import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Index from './components/layout/Index';
import { Provider } from './Context';
import Lyrics from './components/tracks/Lyrics';
import './App.css';

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
      <NavBar />
      <div className="container" >
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/lyrics/track/:id" component={Lyrics} />
        </Switch>
      </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
