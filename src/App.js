import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PhotosContainer from './components/photos/PhotosContainer'
import Photo from './components/photos/Photo'
import './App.css';

const App = () => (
  <div className="app">
  <Router>
    <Switch>
      <Route exact path="/" component={PhotosContainer} />
      <Route path="/photo/:id" component={Photo} />
    </Switch>
  </Router>
</div>
);

export default App;



