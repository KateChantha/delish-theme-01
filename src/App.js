import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
