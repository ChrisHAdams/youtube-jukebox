import React from "react"
import Styled from 'styled-components';

import VideoPlayer from "../components/video-player";
import RightPanel from "../components/right-panel";
import SearchPanel from "../components/search-panel";

const Container = Styled.div`

  display: grid;

  grid-template-areas:
    "VideoPlayer RightPanel"
    "SearchPanel SearchPanel";

  grid-template-columns: 6fr 1fr;
  grid-template-rows: 6fr 2fr;
  height: 98vh;

`
class App extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {loggedIn: true,
                  profileObject: {},
                  videoQueue: [],
                  currentVideo: '',
                  lightTheme: true} ;

    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleLoggedInChange = this.handleLoggedInChange.bind(this);
    this.handleProfileObjectChange = this.handleProfileObjectChange.bind(this);
    this.pushVideoToQueue = this.pushVideoToQueue.bind(this);
    this.videoOnReady = this.videoOnReady.bind(this);
    this.videoOnStart = this.videoOnStart.bind(this);
    this.videoOnPlay = this.videoOnPlay.bind(this);
    this.videoOnEnded = this.videoOnEnded.bind(this);
    this.moveVideoUpQueue = this.moveVideoUpQueue.bind(this);
    this.moveVideoDownQueue = this.moveVideoDownQueue.bind(this);
    this.removeFromQueue = this.removeFromQueue.bind(this);
    this.playNow = this.playNow.bind(this);

  }

  handleThemeChange() {
console.log("Theme Change clicked");
    const newValue = this.state.lightTheme ? false : true;

    this.setState({lightTheme: newValue});

  }

  handleLoggedInChange(value){
    this.setState({loggedIn:value});
  }

  handleProfileObjectChange(value){
    this.setState({profileObject:value});
  }

  pushVideoToQueue(video){

    if(this.state.currentVideo.length === 0) {
      this.setState({currentVideo: video.link});
    } else {
      this.setState({ videoQueue: [...this.state.videoQueue, video] });
    }

  }

  moveVideoUpQueue(videoId){

    const index = this.findIndexOfVideo(videoId);

    if (index > 0) {

      const NextPos = index - 1;

      let temp = this.state.videoQueue;
      [temp[index], temp[NextPos]] = [temp[NextPos], temp[index]];

      console.log(temp);

      this.setState( { videoQueue: temp } );

    }
  }

  moveVideoDownQueue(videoId){

    const index = this.findIndexOfVideo(videoId);

    if (index < (this.state.videoQueue.length - 1)) {

      const NextPos = index + 1;

      let temp = this.state.videoQueue;
      [temp[index], temp[NextPos]] = [temp[NextPos], temp[index]];

      console.log(temp);

      this.setState( { videoQueue: temp } );

     }
  }

  playNow(videoId){

    const index = this.findIndexOfVideo(videoId);
    const currentVideo = this.state.videoQueue[index];


    let queueCopy = this.state.videoQueue;
    let removedItems = queueCopy.splice(index, 1);

    if(removedItems.length === 0 ){ console.log("should not be zero.");}

    this.setState({ videoQueue: queueCopy,
                    currentVideo: currentVideo.link });

  }

  removeFromQueue(videoId){

    const index = this.findIndexOfVideo(videoId);
    let queueCopy = this.state.videoQueue;
    let removedItems = queueCopy.splice(index, 1);

    if(removedItems.length === 0 ){ console.log("should not be zero.");}

    this.setState({ videoQueue: queueCopy });

  }

  findIndexOfVideo(videoId){

    let index = 0;

    for(let i=0; i < this.state.videoQueue.length; i++) {

      if(videoId === this.state.videoQueue[i].id){
        index = i;
        console.log(`Found video at position ${i}`);
        break;
      }

    }

    return index;

  }

  popVideoFromQueue(){

    if(this.state.videoQueue.length > 0) {

      this.setState({
        currentVideo: this.state.videoQueue[0].link,
        videoQueue: this.state.videoQueue.filter((_, i) => i !== 0)
      }, console.log(this.state.videoQueue));

    } else {
      this.setState({currentVideo: ''});
    }
  }

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    console.log("_onReady Fired");
  }

  videoOnStart(event) {
    console.log("_onStart Fired");
  }

  videoOnPlay(event) {
    console.log("_onPlay Fired");
  }

  videoOnEnded(event) {
    // access to player in all event handlers via event.target
    console.log("_onEnded Fired");
    this.popVideoFromQueue();
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container>
        <RightPanel
          onLoggedInChange={this.handleLoggedInChange}
          onProfileObjectChange={this.handleProfileObjectChange}
          loggedIn={this.state.loggedIn}
          profileObject={this.state.profileObject}
          videoQueue={this.state.videoQueue}
          moveVideoUpQueue={this.moveVideoUpQueue}
          moveVideoDownQueue={this.moveVideoDownQueue}
          playNow={this.playNow}
          removeFromQueue={this.removeFromQueue}
          lightTheme={this.state.lightTheme}
        />
        <VideoPlayer
          url={this.state.currentVideo}
          onReady={this.videoOnReady}
          onStart={this.videoOnStart}
          onPlay={this.videoOnPlay}
          onEnded={this.videoOnEnded}
          lightTheme={this.state.lightTheme}
        />
        <SearchPanel
          loggedIn={this.state.loggedIn}
          pushVideoToQueue={this.pushVideoToQueue}
          lightTheme={this.state.lightTheme}
          themeChange={this.handleThemeChange}
        />
      </Container>
    )
  }
}

export default App;
