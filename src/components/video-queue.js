import React from "react"
import Styled from 'styled-components';
import QueueItem from '../atoms/queue-item'


const VideoQueueStyleLight = Styled.div`
  grid-area: VideoQueue;
  min-height: 65vh;
  max-height: 65vh;
  overflow-x: auto;
  background-color: #f4f5f7;
`

const VideoQueueStyleDark = Styled.div`
  grid-area: RightPanel;
  background-color: #293447;
  color: white;
  min-height: 60vh;
  max-height: 67vh;
  overflow-x: auto;
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