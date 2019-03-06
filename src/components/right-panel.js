import React from "react";
import Styled from 'styled-components';
import VideoQueue from "../components/video-queue";
import LoginControl from "../components/login-control";
import UserDetails from "../components/user-details";

const RightPanelStyleLight = Styled.div`
  grid-area: RightPanel;
  background-color: #f4f5f7;
  border-radius: 3px 3px 3px 3px;
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  color: black;
  height: 100%;
  width: 99%;
  margin-top: .5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  float: left;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
        <UserDetails
          loggedIn={this.props.loggedIn}
          profileObject={this.props.profileObject}
          lightTheme={this.props.lightTheme} />
        <LoginControl
          loggedIn={this.props.loggedIn}
          onLoggedInChange={this.props.onLoggedInChange}
          onProfileObjectChange={this.props.onProfileObjectChange}
          lightTheme={this.props.lightTheme}
          themeChange={this.props.themeChange} />
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
