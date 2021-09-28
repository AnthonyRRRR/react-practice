import React, { Fragment } from 'react';
import './App.css';
import AuthProvider from './components/AuthProvider';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <AuthProvider>
      <Fragment>
        <Toolbar/>
      </Fragment>
    </AuthProvider>
  );
}

export default App;
