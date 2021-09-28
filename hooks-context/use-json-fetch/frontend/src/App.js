import React from 'react';
import './App.css';
import DataComponent from './components/DataComponent';
import ErrorComponent from './components/ErrorComponent';
import LoadingComponent from './components/LoadingComponent';

function App() {
  return (
    <div className="App">
      <DataComponent/>
      <LoadingComponent/>
      <ErrorComponent/>
    </div>
  );
}

export default App;
