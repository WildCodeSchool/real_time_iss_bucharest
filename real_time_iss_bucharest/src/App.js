import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Livestream from './components/Livestream';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header image = 'https://via.placeholder.com/70x60'/>
      <Livestream />
    </div>
  );
}

export default App;
