import './App.css';
import React from 'react'
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const dropdownItems = ['Profile information','Change Password', 'Become PRO', 'Help', 'Log Out'];

  return (
    <>
      <Dropdown dropdownItems={dropdownItems}/>
    </>
  );
}

export default App;
