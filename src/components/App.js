import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Wall from './wall/Wall';
import Menu from './Menu';

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path={['/wall', '/']} component={Wall} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
