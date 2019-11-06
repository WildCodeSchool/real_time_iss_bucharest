import React from 'react';
import './App.css';
import News from './components/News';
import NewsNumberOfPeople from './components/NewsNumberPeopleInSpace';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
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
