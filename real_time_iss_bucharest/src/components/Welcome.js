import React, { Component } from 'react';

// PACKAGE FOR SCROLLING FROM ONE SECTION TO ANOTHER:  https://scotch.io/tutorials/implementing-smooth-scrolling-in-react
// FOR SCROLLING ANIMATION INITIATED BY THE WELCOME SECTION BTN
import { Link } from "react-scroll";
import Logo from '../components/Logo/Logo';

import './welcome.css'


class Welcome extends Component {
    launchTracking(){
        console.log('btn clicked boi')
        this.props.launchTracking(true)
    }

    render() {
        return(
        <div className='welcome container-fluid row align-items-center p-3 mb-2 bg-light text-dark' id={this.props.id}>
            <div className="container welcome-main">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="logo">
                            <Logo />
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <h1 className="display-3">Real-time ISS tracker</h1>
                            <h2 className="lead">
                            The International Space Station is a space station in low Earth orbit, at approximately 400 km from the ground.<br/>
                            At 28 800 km/h it only takes 90 minutes for the weightless laboratory to make a complete circuit of Earth.
                            </h2>
                                {/* <button className="welcome-call-to-action col-4 btn btn-dark"><a href="#" onClick={this.scroll.bind(this)}>Track ISS</a></button> */}
                                
                                    <Link 
                                    activeClass="inactive" 
                                    to="mapSection" 
                                    spy={true} smooth={true} 
                                    offset={0} duration={500}
                                    >
                                        <button className="welcome-call-to-action col-4 btn btn-dark" onClick={this.launchTracking.bind(this)}>Track ISS</button>
                                    </Link>
                                    {/* </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Welcome;