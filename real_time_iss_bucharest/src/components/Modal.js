import React, { Component, useState } from 'react'
import {Button } from 'react-bootstrap'
import '../App.css'

import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

export default class ModalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: this.props.show,
        name: '',team :'' ,country: '',
        ModalFromBtn: false};

      this.toggle = this.toggle.bind(this);
    }

    showCancelBtn() {
      setTimeout(() => {
        let cancel = document.querySelector('cancelBtn')
        cancel.style.visibility="block"
        console.log('Set timeout')
      }, 1000);
    }

    toggle() {
      this.setState({
        show: !this.state.show,

      });
      console.log('clicked')
      console.log(this.state.show)
      this.showCancelBtn()
    }

    alertThisShouldWork() {
        alert('You won!');
    }


    render() {
        if(this.props.show  && !this.state.ModalFromBtn) {
            this.setState({
              show: this.props.show,
              ModalFromBtn: true})
        }
        var show = this.state.show
        console.log(show)
      return (
          <div>
          <Button color="success" onClick={this.toggle}>React Modal</Button>
          <Modal className="bg-dark" show={show} keyboard={true} onEscapeKeyDown={()=> {
              console.log('ESCAPE')
              this.toggle()
          }}>
          <form>
            <ModalHeader className='modalHeader'>PLEASE ENTER YOUR CREDIT CARD INFORMATION TO ++VALIDATE YOUR TRIP TO ISS++ THANK YOU</ModalHeader>
            <ModalBody>
            <div className="row">
                <div className="form-group col-md-7">
                    <label>Owner</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group col-md-5">
                    <label>CVV</label>
                    <input type="number" className="form-control" />
                </div>
            </div>
              <div className="row">
               <div className="form-group col-md-12">
              <label>Card Number</label>
                  <input type="number" className="form-control" />
                 </div>
                </div>
              <div className="from-group">
               <div className="form-group col-md-7">
                <label>Expiration Date</label>
                <select className="col-md-7">
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select className="col-md-5">
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                    <option value="22"> 2022</option>
                    <option value="23"> 2023</option>
                    <option value="24"> 2024</option>
                </select>                 </div>
                </div>
            </ModalBody>
            <ModalFooter>
              <button color="danger" className="btn btn-danger cancelBtn">No I don't want to visit ISS</button>
              <button type="button" color="primary" className="btn btn-primary" onClick={()=>{
                  this.toggle()

              }}>Confirm your trip</button>
            </ModalFooter>
            </form>
          </Modal>
          </div>
        
      );
    }
  }