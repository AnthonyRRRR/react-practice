import React from 'react';
import './App.css';
import ServiceList from './components/ServiceList';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/services"/>
          <Route exact path="/services">
            <ServiceList/>
          </Route>
          <Route exact path={ `/:id/details` } component={ ServiceDetails }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
