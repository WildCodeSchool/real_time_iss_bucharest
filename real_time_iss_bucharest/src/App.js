import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Header image = 'https://via.placeholder.com/70x60'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Welcome />
    </div>
  );
}

export default App;
