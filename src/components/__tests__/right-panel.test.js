import React from "react"
import renderer from "react-test-renderer"
import {render, fireEvent, cleanup} from 'react-testing-library'
import RightPanel from "../right-panel";
import {toHaveStyle} from 'jest-dom';

expect.extend({toHaveStyle})


describe("RightPanel", () => {

  it("renders correctly", () => {

    const VideoQueue = [];
    const LightTheme = false;

    const tree = renderer
      .create(<RightPanel
                videoQueue={VideoQueue}
                lightTheme={LightTheme}
                moveVideoUpQueue={"callback"}
                moveVideoDownQueue={"callback"}
                removeFromQueue={"callback"}
                playNow={"callback"}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly based on dark theme", () => {

    const VideoQueue = [];
    const LightTheme = false;

    const {getByTestId} = render(<RightPanel
                videoQueue={VideoQueue}
                lightTheme={LightTheme}
                moveVideoUpQueue={"callback"}
                moveVideoDownQueue={"callback"}
                removeFromQueue={"callback"}
                playNow={"callback"}/>);

    expect(getByTestId('rightPanel')).toHaveStyle(`background-color: '#293447'`);
  })

  it("renders correctly based on light theme", () => {

    const VideoQueue = [];
    const LightTheme = true;

    const {getByTestId} = render(<RightPanel
                videoQueue={VideoQueue}
                lightTheme={LightTheme}
                moveVideoUpQueue={"callback"}
                moveVideoDownQueue={"callback"}
                removeFromQueue={"callback"}
                playNow={"callback"}/>);

    expect(getByTestId('rightPanel')).toHaveStyle(`background-color: '#f4f5f7'`);
  })

})


