import React from "react";
import Styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';

const QueueItemStyleLight = Styled.div`

  min-width: 10vw;
  max-wdith: 12vw;
  min-height:15px;
  font-size:11px;
  margin: 5px;
  padding 1px;
  font-family: arial;
  background-color: #a7aebc;
  color: #5d5e63;
  border-radius: 3px 3px 3px 3px;
`


const QueueItemStyleDark = Styled.div`

  min-width: 10vw;
  max-wdith: 12vw;
  min-height:15px;
  font-size:11px;
  margin: 4px;
  padding 4px;
  font-family: arial;
  background-color: a7aebc;
  color: #5d5e63;
  border-radius: 3px 3px 3px 3px;

`

const ImageStyle = Styled.img`

  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4px;
  padding-bottom: 2px;
  margin-top: 2px;
  margin-bottom: 2px:
  background-color: #a7aebc;
  color: #a7aebc;
  border-radius: 3px 3px 3px 3px;

`

const IconWrapper = Styled.div `
  text-align: center;
`

const Icon = Styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  display: inline-block;
  max-width: 50%;
  vertical-align: top;
`

const TitleWrapper = Styled.p `
  padding-left: 3px;
  padding-right: 3px;
  text-align: center;
`

// <p>{this.props.video.title.substring(0,20)}...</p>

class QueueItem extends React.Component {

  handleMoveUpClick = () => {
    this.props.moveVideoUpQueue(this.props.video.id);
  }

  handleMoveDownClick = () => {
    this.props.moveVideoDownQueue(this.props.video.id);
  }

  handleRemoveClick = () => {
    this.props.removeFromQueue(this.props.video.id);
  }

  handlePlayNow = () => {
    this.props.playNow(this.props.video.id);
  }


  render() {

    const QueueItemStyle = this.props.lightTheme ? QueueItemStyleLight : QueueItemStyleDark;

    return (
      <div>
        <QueueItemStyle key={this.props.video.id} >
          <ImageStyle
            title={this.props.video.title}
            alt={this.props.video.title}
            src={this.props.video.thumbnails.default.url}
            onClick={this.handlePlayNow} />
          <TitleWrapper>{this.props.video.title}</TitleWrapper>
          <IconWrapper>
            <Icon>
              <FaArrowAltCircleUp size={"2em"} onClick={this.handleMoveUpClick} />
            </Icon>
            <Icon>
              <FaArrowAltCircleDown size={"2em"} onClick={this.handleMoveDownClick} />
            </Icon>
            <Icon>
              <FaTimesCircle size={"2em"} onClick={this.handleRemoveClick} />
            </Icon>
          </IconWrapper>
        </QueueItemStyle>
      </div>
    );
  }
}

export default QueueItem;