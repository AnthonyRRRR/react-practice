import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import ServiceEdit from './components/ServiceEdit';


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
