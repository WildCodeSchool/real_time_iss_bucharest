import React from 'react';
import logo from './logo.svg';

import './App.css'
import GMap from './components/Map'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <GMap className="map" />
    </div>
  );
}

export default App;
