import React from "react";
import Styled from 'styled-components';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
import CleanseString from '../javascript/cleanse-string';

const QueueItemStyleLight = Styled.div`

  min-width: 10vw;
  font-size: 11px;
  margin-top: 4px;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 4px;
  padding 1px;
  font-family: arial;
  background-color: #a7aebc;
  color: #5d5e63;
  border-radius: 3px 3px 3px 3px;
`


const QueueItemStyleDark = Styled.div`
  min-width: 10vw;
  font-size: 11px;
  margin-top: 4px;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 4px;
  padding 1px;
  font-family: arial;
  background-color: #293447;
  color: #5d5e63;
  border-radius: 3px 3px 3px 3px;
`

const ImageStyle = Styled.img`

  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2px;
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
  padding-bottom: 1px;
  display: inline-block;
  max-width: 50%;
  vertical-align: top;
`

const TitleWrapper = Styled.p `
  padding-left: 3px;
  padding-right: 3px;
  text-align: center;
  word-wrap: break-word;
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
    const shortTitle = CleanseString(this.props.video.title).substring(0,25);
    const title = CleanseString(this.props.video.title);

    return (
      <div>
        <QueueItemStyle key={this.props.video.id} data-testid="container">
          <ImageStyle
            title={title}
            alt={title}
            src={this.props.video.thumbnails.default.url}
            onClick={this.handlePlayNow}
            data-testid="playNow"
          />

          <TitleWrapper>{shortTitle}</TitleWrapper>
          <IconWrapper>
            <Icon>
              <FaArrowAltCircleUp data-testid="up" size={"2em"} onClick={this.handleMoveUpClick} />
            </Icon>
            <Icon>
              <FaArrowAltCircleDown data-testid="down" size={"2em"} onClick={this.handleMoveDownClick} />
            </Icon>
            <Icon>
              <FaTimesCircle data-testid="remove" size={"2em"} onClick={this.handleRemoveClick} />
            </Icon>
          </IconWrapper>
        </QueueItemStyle>
      </div>
    );
  }
}

export default QueueItem;