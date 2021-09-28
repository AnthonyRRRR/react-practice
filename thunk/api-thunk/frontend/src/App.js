import React, { Fragment } from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceEdit from './components/ServiceEdit';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/services"/>
          <Route exact path="/services">
            <ServiceAdd/>
            <ServiceList/>
          </Route>
          <Route exact path={ `/services/:id` } component={ ServiceEdit }/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
