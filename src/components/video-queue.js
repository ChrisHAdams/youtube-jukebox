import React from "react"
import Styled from 'styled-components';
import QueueItem from '../atoms/queue-item'


const VideoQueueStyleLight = Styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  white-space: nowrap;
  background-color: #f4f5f7;
  color: black;
  max-height: 75vh;
`

const VideoQueueStyleDark = Styled.div`
  display: flex;
  flex-direction: column;
  overflow-y auto;
  white-space: nowrap;
  background-color: #5b75a0;
  color: white;
  max-height: 75vh;
`

function QueueList(searchResults, lightTheme, moveVideoUpQueue, moveVideoDownQueue, removeFromQueue, playNow) {

  const results = searchResults;

  const listItems = results.map((video) =>
    <QueueItem
      key={video.id}
      video={video}
      lightTheme={lightTheme}
      moveVideoUpQueue={moveVideoUpQueue}
      moveVideoDownQueue={moveVideoDownQueue}
      removeFromQueue={removeFromQueue}
      playNow={playNow} />
  );

  return listItems;

}

class VideoQueue extends React.Component  {

  render() {

    const results = QueueList(this.props.videoQueue,
                              this.props.lightTheme,
                              this.props.moveVideoUpQueue,
                              this.props.moveVideoDownQueue,
                              this.props.removeFromQueue,
                              this.props.playNow);

    const VideoQueueStyle = this.props.lightTheme ? VideoQueueStyleLight : VideoQueueStyleDark

    return (
      <VideoQueueStyle>
        {results}
      </VideoQueueStyle>

    )
  }
}

export default VideoQueue;