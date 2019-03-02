import React from "react";
import Styled from 'styled-components';
import ReactPlayer from 'react-player';


const VideoPlayerStyleLight = Styled.div`
  grid-area: VideoPlayer;
  border-radius: 3px 3px 3px 3px;
  height: 99%;
  width: 99%;
  background-color: #f4f5f7;
  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const VideoPlayerStyleDark = Styled.div`
  grid-area: VideoPlayer;
  border-style: solid;
  height: 99%;
  width: 99%;
  min-height: 220px;
  background-color: #293447;
  color: white;

`

class VideoPlayer extends React.Component {


  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Current video ${this.props.url}.  Next video ${nextProps.url}`);


    let update = false;

    if ( nextProps.url !== this.props.url) {
      update = true;
    }

    if (nextProps.lightTheme !== this.props.lightTheme){
      update = true;
    }

    console.log("Update? " + update);

    return update;
  }

  render() {

    const VideoPlayerStyle = this.props.lightTheme ? VideoPlayerStyleLight : VideoPlayerStyleDark;


    if (this.props.url.length === 0) {

      return (
        <VideoPlayerStyle>
          <VideoPlayerMessageStyle>
            <p>No videos are queued.  Log in to your Google/YouTube account and search</p>
          </VideoPlayerMessageStyle>
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