import React from "react"
import renderer from "react-test-renderer";
import QueueItem from "../queue-item";

import {render, fireEvent, cleanup} from '@testing-library/react'
import {toHaveStyle} from '@testing-library/jest-dom';

expect.extend({toHaveStyle})

const videoMock = {
  id: "someId",
  title: "Some Title",
  thumbnails:{
    default:{
      url:"www.something"
    }
  }

}


describe("QueueItem", () => {

  afterEach(cleanup);

  it("renders correctly", () => {
    const tree = renderer
      .create(<QueueItem
                key="keyVal"
                video={videoMock}
                lightTheme={false}
                moveVideoUpQueue="callback"
                moveVideoDownQueue="callback"
                removeFromQueue="callback"
                playNow="false"/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const upOnClick = jest.fn();
    const downOnClick = jest.fn();
    const removeOnClick = jest.fn();
    const playNowOnClick = jest.fn();
    const lightThemeValue = false;

    const { getByTestId } = render(<QueueItem
                                  key="keyVal"
                                  video={videoMock}
                                  lightTheme={lightThemeValue}
                                  moveVideoUpQueue={upOnClick}
                                  moveVideoDownQueue={downOnClick}
                                  removeFromQueue={removeOnClick}
                                  playNow={playNowOnClick}/>);

    fireEvent.click(getByTestId('up'));
    expect(upOnClick).toHaveBeenCalled();

    fireEvent.click(getByTestId('down'));
    expect(downOnClick).toHaveBeenCalled();

    fireEvent.click(getByTestId('remove'));
    expect(removeOnClick).toHaveBeenCalled();

    fireEvent.click(getByTestId('playNow'));
    expect(playNowOnClick).toHaveBeenCalled();

    expect(getByTestId('container')).toHaveStyle(`background-color: '#293447'`);

  });

  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const upOnClick = jest.fn();
    const downOnClick = jest.fn();
    const removeOnClick = jest.fn();
    const playNowOnClick = jest.fn();
    const lightThemeValue = true;

    const { getByTestId } = render(<QueueItem
                                  key="keyVal"
                                  video={videoMock}
                                  lightTheme={lightThemeValue}
                                  moveVideoUpQueue={upOnClick}
                                  moveVideoDownQueue={downOnClick}
                                  removeFromQueue={removeOnClick}
                                  playNow={playNowOnClick}/>);


    expect(getByTestId('container')).toHaveStyle(`background-color:'#293447'`);

  });

})


