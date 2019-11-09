import React from 'react';
import logo from './logo.svg';
import './App.css';

import Newsletter from './components/Newsletter'
import Modal from './components/Modal'

import 'bootstrap/dist/css/bootstrap.min.css';
import { tsConstructorType } from '@babel/types';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      checkBoxThatOpensModal : false
    }
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
        <Newsletter callBack={this.dataFn.bind(this)}/>
        <Modal show={this.state.checkBoxThatOpensModal}/>
      </div>
    );
  }
}

export default App;
