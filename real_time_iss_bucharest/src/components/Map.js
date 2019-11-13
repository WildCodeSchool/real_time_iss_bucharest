import React from 'react'
import axios from 'axios'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

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
            longitude : '26.1025',
            latitude : '44.4268'
        }
    }

    getCoordinates = () => {
        const longitude = this.state.longitude
        const latitude = this.state.latitude
        axios.get('http://api.open-notify.org/iss-now.json')
        .then(response => {
            this.setState({
                longitude : response.data.iss_position.longitude,
                latitude : response.data.iss_position.latitude
            })
        })
    }

    render() {
        return (
            <div className="map_container map">
                <h1>This is our beautiful map</h1>
                <div className="btn-container">
                <button className="test" onClick={this.getCoordinates}>
                        click me
                </button>
                    <p>long: {this.state.longitude}</p>
                    <p>lat: {this.state.latitude}</p>
                    </div>
                <div className="justTheMap">
                <Map google={this.props.google} zoom={2}  
                style={style} initialCenter={{
                    lat: 44.4268,
                    lng: 26.1025
                    }}>

 
                          <Marker
    title={'Bucharest'}
    name={'Bucharest'}
    position={{lat: this.state.latitude, lng: this.state.longitude}}
    // icon={{
    //     url: "/path/to/custom_icon.png",
    //     anchor: new google.maps.Point(32,32),
    //     scaledSize: new google.maps.Size(64,64)
    //   }}
       />

                    {/* <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow> */}
                </Map>
                </div>


            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (apiKey)
  })(GMap)