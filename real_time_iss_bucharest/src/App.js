import React from 'react';
import Header from './components/Header'
import GMap from './components/Map'
import Welcome from './components/Welcome'
import News from './components/News';
import NewsNumberOfPeople from './components/NewsNumberPeopleInSpace';
import GalleryCarousel from './components/GalleryCarousel'
import Newsletter from './components/Newsletter'
import Modal from './components/Modal'
// import Logo from './components/Logo/Logo.js'
import Footer from './components/Footer'
import Livestream from './components/Livestream'

// import { tsConstructorType } from '@babel/types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnFromWelcomeSectionClicked: false,
      livestreamDisplay: true
    }
  }

  toLivestream(dataWatchLiveBtn) {
    this.setState({
      livestreamDisplay: false
    })
  }

  checkBoxThatOpensModalFunction = (dataWelcomeBtn) => {
    this.setState({ btnFromWelcomeSectionClicked: dataWelcomeBtn })
  }

  launchTracking(dataWelcomeBtn) {
    console.log('called: ' + dataWelcomeBtn)
    this.setState({
      btnFromWelcomeSectionClicked: dataWelcomeBtn,
      checkBoxThatOpensModal: false
    })
  }

  checkBoxThatOpensModalFunction = (dataFromCheckbox) => {
    this.setState({ checkBoxThatOpensModal: dataFromCheckbox })
  }

  dataFn(dataFromChild) {
    console.log('called: ' + dataFromChild)
    this.setState({
      checkBoxThatOpensModal: dataFromChild
    })
  }

  render() {
    if (this.state.livestreamDisplay) {
      return (
        <div className="App">
          <Header image='https://via.placeholder.com/70x60' />
          <Welcome launchTracking={this.launchTracking.bind(this)} toLivestream={this.toLivestream.bind(this)} id='welcome' />
          <div>
            <GMap id="mapSection" className="map map_component" welcomeBtn={this.state.btnFromWelcomeSectionClicked} />
          </div>
          <section className='newsSection' id='newsSection'>
            <NewsNumberOfPeople  className='newCard'/>
          </section>
          <GalleryCarousel id='Carousel' />
          <Newsletter callBack={this.dataFn.bind(this)} id='newsletter' />
          <Modal show={this.state.checkBoxThatOpensModal} />
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <button style={{
            position: 'absolute',
            top: '11px',
            left: '10px',
            background: 'white',
            border: 'none',
            borderRadius: '5px',
            width: '50px',
            fontSize: '36px'}} onClick={() => {
            this.setState({
              livestreamDisplay: true
            })
          }}> <i src="./img/left-arrow.png"></i>&#xab;</button>
        <Livestream />
      </div >
    )
    }
  }
}
export default App;
