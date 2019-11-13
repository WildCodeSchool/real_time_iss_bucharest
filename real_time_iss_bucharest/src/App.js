// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Header image = 'https://via.placeholder.com/70x60'/>
      <Welcome />
    </div>
  );
}

export default App;
