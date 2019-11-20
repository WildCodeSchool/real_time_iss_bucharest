import React from 'react'
import YouTube from 'react-youtube'
class Livestream extends React.Component{
   constructor(props) {
       super(props);
       this.state = { width: 0, height: 0 };
       this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
     }
     componentDidMount() {
       this.updateWindowDimensions();
       window.addEventListener('resize', this.updateWindowDimensions);
     }
     componentWillUnmount() {
       window.removeEventListener('resize', this.updateWindowDimensions);
     }
     updateWindowDimensions() {
       this.setState({ width: window.innerWidth, height: window.innerHeight });
     }
   onPlayerReady(event) {
       console.log('onPlayerReady function launched')
       var embedCode = event.target.getVideoEmbedCode();
       event.target.playVideo();
       if (document.getElementById('embed-code')) {
           // console.log('if statement thing with embedCode')
         document.getElementById('embed-code').innerHTML = embedCode;
       }
     }
   render(){
       const opts = {
           height: this.state.height,
           width: this.state.width,
           playerVars: {
               autoplay: 1
           }
       };
       return(
           <div>
       <YouTube
       videoId="EEIk7gwjgIM"
       opts={opts}
       onReady={this.onPlayerReady}
     />
           </div>
       );
   }
}
export default Livestream