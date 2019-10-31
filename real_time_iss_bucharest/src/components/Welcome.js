import React, { Component } from 'react';
import './welcome.css'



class Welcome extends Component {
    constructor(){
        super()
    }
    render() {
        return(
        <div className='welcome'>
            <p>Hi, I'm the welcome component</p>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        Maria's awesome logo goes here
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <h1>Real-timer ISS tracker</h1>
                            <h2>
                            The International Space Station is a space station in low Earth orbit, at approximately 400 km from the ground.<br/>
                            At 28 800 km/h it only takes 90 minutes for the weightless laboratory to make a complete circuit of Earth.
                            </h2>
                            <button className="callToAction col-4">Track ISS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Welcome;