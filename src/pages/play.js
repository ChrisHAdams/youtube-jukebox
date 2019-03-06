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
  }

  componentDidMount() {

  }

  render() {
    return (
      <Container>

<VideoPlayer
          url={""}
          onReady={""}
          onStart={""}
          onPlay={""}
          onEnded={""}
          lightTheme={""}
        />

<RightPanel
          onLoggedInChange={""}
          onProfileObjectChange={""}
          loggedIn={""}
          profileObject={""}
          videoQueue={""}
          moveVideoUpQueue={""}
          moveVideoDownQueue={""}
          playNow={""}
          removeFromQueue={""}
          themeChange={""}
          lightTheme={""}
        />

        <SearchPanel
          loggedIn={""}
          pushVideoToQueue={""}
          lightTheme={""}
        />
      </Container>
    )
  }
}

export default App;
