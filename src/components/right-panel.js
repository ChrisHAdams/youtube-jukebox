import React from "react";
import Styled from 'styled-components';
import VideoQueue from "../components/video-queue";

const RightPanelStyleLight = Styled.div`
  grid-area: RightPanel;
  background-color: #f4f5f7;
  border-radius: 3px 3px 3px 3px;
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  height: 100%;
  width: 99%;
  position: relative;
  float: left;
`
const RightPanelStyleDark = Styled.div`
  grid-area: RightPanel;
  background-color: #293447;
  border-radius: 3px 3px 3px 3px;
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  color: #5d5e63;
  height: 100%;
  width: 99%;
  position: relative;
  float: left;
`

class RightPanel extends React.Component  {

  constructor(props) {
    super(props);
    console.log("Light Theme? " + this.props.lightTheme);
  }


  render() {

    let RightPanelStyle;

    if (this.props.lightTheme) {
      RightPanelStyle = RightPanelStyleLight;
    } else {
      RightPanelStyle = RightPanelStyleDark;
    }

    return (
      <RightPanelStyle>
        <VideoQueue
          videoQueue={this.props.videoQueue}
          lightTheme={this.props.lightTheme}
          moveVideoUpQueue={this.props.moveVideoUpQueue}
          moveVideoDownQueue={this.props.moveVideoDownQueue}
          removeFromQueue={this.props.removeFromQueue}
          playNow={this.props.playNow} />
      </RightPanelStyle>
    )
  }
}

export default RightPanel;
