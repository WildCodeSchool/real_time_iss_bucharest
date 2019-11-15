import React from 'react';
import Header from './components/Header'
import GMap from './components/Map'
import Welcome from './components/Welcome'
import News from './components/News';
import NewsNumberOfPeople from './components/NewsNumberPeopleInSpace';
import Component from './components/carousel'

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
      btnFromWelcomeSectionClicked: dataWelcomeBtn
    })
  }

  render(){
    return (
      <div className="App">
        <Header image = 'https://via.placeholder.com/70x60'/>
        <Welcome launchTracking={this.launchTracking.bind(this)}/>
        <div>
        <GMap id="mapSection" className="map map_component" welcomeBtn={this.state.btnFromWelcomeSectionClicked} />
        </div>
      <section className='newsSection'>
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
        <NewsNumberOfPeople />
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
        <News title='Lorem Ipsum' subtitle='Lorem Ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt metus ac odio molestie, eu pretium dui faucibus. Curabitur eleifend eu eros ut hendrerit. '/>
      </section>
          <Component />
      </div>
    );
  }
}

export default App;
