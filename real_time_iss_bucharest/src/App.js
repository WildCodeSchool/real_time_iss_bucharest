// import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './components/Header'
import GMap from './components/Map'
import Welcome from './components/Welcome'
import News from './components/News';
import NewsNumberOfPeople from './components/NewsNumberPeopleInSpace';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {
  return (
    <div className="App">
      <Header image = 'https://via.placeholder.com/70x60'/>
      <Welcome />
      <div>
      <GMap className="map" />
      </div>
    <section className='newsSection'>
      <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
      <NewsNumberOfPeople />
      <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
      <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
      <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
      <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
    </section>
    </div>
  );
}

export default App;
