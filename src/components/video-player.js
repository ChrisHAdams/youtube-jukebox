import React from "react";
import Styled from 'styled-components';
import ReactPlayer from 'react-player';


const VideoPlayerStyleLight = Styled.div`
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  grid-area: VideoPlayer;
  border-radius: 3px 3px 3px 3px;
  height: 100%;
  width: 99%;
  background-color: #f4f5f7;
  position: relative;
  float: left;
`

const VideoPlayerStyleDark = Styled.div`
  grid-area: VideoPlayer;
  border-radius: 3px 3px 3px 3px;
  height: 100%;
  width: 99%;
  position: relative;
  float: left;
  background-color: #293447;
  color: #5d5e63;
`

const VideoPlayerMessageStyle = Styled.p`
  color: #5d5e63;
  font-family: arial;
  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`


class VideoPlayer extends React.Component {


  shouldComponentUpdate(nextProps, nextState) {
    //console.log(`Current video ${this.props.url}.  Next video ${nextProps.url}`);


    let update = false;

    if ( nextProps.url !== this.props.url) {
      update = true;
    }

    if (nextProps.lightTheme !== this.props.lightTheme){
      update = true;
    }

    //console.log("Update? " + update);

    return update;
  }

  render() {

    const VideoPlayerStyle = this.props.lightTheme ? VideoPlayerStyleLight : VideoPlayerStyleDark;


    if (this.props.url.length === 0) {

      return (
        <VideoPlayerStyle>
          <VideoPlayerMessageStyle>No videos are queued...</VideoPlayerMessageStyle>
        </VideoPlayerStyle>
      );

    } else {

      return (
        <VideoPlayerStyle>

          <ReactPlayer
            controls= {true}
            onReady={this.props.onReady}
            onStart={this.props.onStart}
            onPlay={this.props.onPlay}
            onEnded={this.props.onEnded}
            width="100%"
            height="100%"
            url={this.props.url}
            playing={true}
            config={{
              youtube: {
                playerVars: { showinfo: 0 , autoplay: 1}

              }

            }}

          />
        </VideoPlayerStyle>
      );
    }
  }


}

export default VideoPlayer;