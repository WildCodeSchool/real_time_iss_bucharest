import React from 'react';
import Header from './components/Header'
import GMap from './components/Map'
import Welcome from './components/Welcome'
import News from './components/News';
import NewsNumberOfPeople from './components/NewsNumberPeopleInSpace';
import Component from './components/carousel'
import Newsletter from './components/Newsletter'
import Modal from './components/Modal'
// import Logo from './components/Logo/Logo.js'
import Footer from './components/Footer'
import Navbar_Logo from './components/Navbar_Logo/Navbar_Logo'

// import { tsConstructorType } from '@babel/types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      btnFromWelcomeSectionClicked : false
    }
  }

  checkBoxThatOpensModalFunction = (dataWelcomeBtn) => {
    this.setState({btnFromWelcomeSectionClicked: dataWelcomeBtn})
  }

  launchTracking(dataWelcomeBtn) {
    console.log('called: ' + dataWelcomeBtn)
    this.setState({
      btnFromWelcomeSectionClicked: dataWelcomeBtn,
      checkBoxThatOpensModal : false
    })
  }

  checkBoxThatOpensModalFunction = (dataFromCheckbox) => {
    this.setState({checkBoxThatOpensModal: dataFromCheckbox})
  }

  dataFn(dataFromChild) {
    console.log('called: ' + dataFromChild)
    this.setState({
      checkBoxThatOpensModal: dataFromChild
    })
  }

  render(){
    return (
      <div className="App">
        <Header image = 'https://via.placeholder.com/70x60'/>
        <Welcome launchTracking={this.launchTracking.bind(this)} id='welcome'/>
        <div>
        <GMap id="mapSection" className="map map_component" welcomeBtn={this.state.btnFromWelcomeSectionClicked} />
        </div>
      <section className='newsSection' id='newsSection'>
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
        <NewsNumberOfPeople />
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
      </section>
          <Component id='Carousel'/>
        <Newsletter callBack={this.dataFn.bind(this)} id='newsletter'/>
        <Modal show={this.state.checkBoxThatOpensModal}/>
        <Footer />
      </div>
    );
  }
}

export default App;
