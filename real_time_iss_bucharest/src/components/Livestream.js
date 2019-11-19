import React from 'react'
import YouTube from 'react-youtube'

class Livestream extends React.Component{
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
            height: '700',
            width: '1300',
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