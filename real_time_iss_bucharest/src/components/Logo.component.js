import React, {Component} from 'react'

class Logo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div id="logo">
            <div id="atom">
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div class="orbit">
                    <div class="path">
                        <div class="electron"></div>
                    </div>
                </div>
                <div id="nucleus"></div>
            </div>
        </div>


        )
    }
}
export default Logo;