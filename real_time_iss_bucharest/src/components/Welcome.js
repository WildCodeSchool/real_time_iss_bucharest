import React, { Component } from 'react';
import './welcome.css'


class Welcome extends Component {
    render() {
        return(
        <div className='welcome container-fluid row align-items-center p-3 mb-2 bg-light text-dark'>
            <div className="container welcome-main">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="logo">Maria's awesome logo goes here</div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <h1 className="display-3">Real-time ISS tracker</h1>
                            <h2 className="lead">
                            The International Space Station is a space station in low Earth orbit, at approximately 400 km from the ground.<br/>
                            At 28 800 km/h it only takes 90 minutes for the weightless laboratory to make a complete circuit of Earth.
                            </h2>
                                <button className="welcome-call-to-action col-4 btn btn-dark"><a href="#">Track ISS</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Welcome;