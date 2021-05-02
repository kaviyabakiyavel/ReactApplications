import React from 'react';
import './App.css';
import RootNav from './config/route'
import Navbar from './Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RootNav/>
    </div>
  );
}

export default App;
