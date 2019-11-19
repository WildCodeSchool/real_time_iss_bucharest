import React from 'react'
import axios from 'axios'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const apiKey = 'AIzaSyBuqivjlUHx_1CzHXli6ft9xLWrI-dOGwo'
const style = {
    width: '80%',
    height: '80%',
    margin: '0 auto'
  }

class GMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude : '',
            latitude : '',
            welcomeBtnClicked : this.props.welcomeBtn,
            // flag: !this.props.welcomeBtn
        }
    }

    getCoordinates = () => {
        this.timer = setInterval(() => {
            console.log('new coordinates at ' + new Date().toLocaleTimeString())
            axios.get('http://api.open-notify.org/iss-now.json')
            .then(response => {
                this.setState({
                    longitude : response.data.iss_position.longitude,
                    latitude : response.data.iss_position.latitude
                })
            })
        }, 2000);
    }

    render() {
        if(this.props.welcomeBtn && !this.state.welcomeBtnClicked) {
            this.getCoordinates()
            this.setState({
                welcomeBtnClicked:true
            })
        }

        return (
            <div className="map_container map p-3 mb-2 bg-dark text-white " id={this.props.id}>
                <div className="coordinates">
                    <h1 className="display-4">ISS real-time position</h1>
                    <div className="btn-container">
                        {/* <button className="test" onClick={this.getCoordinates}>
                            click me
                        </button> */}
                        <div className="coordinates-info">
                            <p>long: {this.state.longitude}</p>
                            <p>lat: {this.state.latitude}</p>
                        </div>
                    </div>
                </div>

                <div className="justTheMap p-3 mb-2 bg-dark text-white" style={{ height:'100vh', width:'800px'}}>
                <Map google={this.props.google} zoom={5}  
                style={style} center={{
                    lat: this.state.latitude,
                    lng: this.state.longitude
                    }}>

                <Marker
                    title={'Bucharest'}
                    name={'Bucharest'}
                    position={{lat: this.state.latitude, lng: this.state.longitude}}/>

                </Map>
                </div>
                    <hr/>

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (apiKey)
  })(GMap)