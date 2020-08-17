/* import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from "./Components/login"

function App() {
  const [pswUser, setPswUser] = useState ();

  const getPass = (passwrd) => {
    setPswUser(passwrd);
  }
  console.log(pswUser)
  return (
    <div className="App">
      <Login getPass={getPass} />
    </div>
  );
}

export default App; */

import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from "./Route"

function App() {
  
  return (
      <Routes />
  );
}

export default App; 
