// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './components/Header'
import GMap from './components/Map'
import Welcome from './components/Welcome'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header image = 'https://via.placeholder.com/70x60'/>
      <Welcome />
      <GMap className="map" />
    </div>
  );
}

export default App;
