import React, {Component} from 'react';
import './Logo.css';

class Logo extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
                    <div class="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
        )
    }
}

export default Logo;