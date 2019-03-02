import React from "react";
import Styled from 'styled-components';
import VideoQueue from "../components/video-queue";
import LoginControl from "../components/login-control";
import UserDetails from "../components/user-details";

const RightPanelStyleLight = Styled.div`
  grid-area: RightPanel;
  background-color: white;
  color: black;
`
const RightPanelStyleDark = Styled.div`
  grid-area: RightPanel;
  background-color: #293447;
  color: white;
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
