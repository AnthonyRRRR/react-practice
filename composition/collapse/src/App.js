import React from 'react';
import './App.css';
import Collapse from './components/Collapse';


function App() {
  return (
    <div className="App">
    <Collapse collapsedLabel='Развернуть' expandedLabel='Свернуть'/>
    </div>
  );
}

export default App;
