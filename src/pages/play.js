import React from "react"
import Styled from 'styled-components';

//import VideoPlayer from "../components/video-player";
//import RightPanel from "../components/right-panel";
//import SearchPanel from "../components/search-panel";

const Container = Styled.div`

  display: grid;

  grid-template-areas:
    "VideoPlayer RightPanel"
    "SearchPanel SearchPanel";

  grid-template-columns: 6fr 1fr;
  grid-template-rows: 6fr 2fr;
  height: 98vh;

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

const RightPanelStyleDark = Styled.div`
  grid-area: RightPanel;
  background-color: #293447;
  border-radius: 3px 3px 3px 3px;
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  color: #5d5e63;
  height: 99%;
  width: 99%;
  margin-top: .5px;

  position: relative;
  float: left;
`

const SearchPanelStyleDark = Styled.div`
  grid-area: SearchPanel;
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  border-radius: 3px 3px 3px 3px;
  background-color: #293447;
  margin-top: 2px;
  margin-bottom: 4px;
  margin-left: 3px;
  border-top: 2px;
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

        <VideoPlayerStyleDark/>
        <RightPanelStyleDark/>
        <SearchPanelStyleDark/>

      </Container>
    )
  }
}

export default App;
