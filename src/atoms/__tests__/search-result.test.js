import React from "react"
import renderer from "react-test-renderer"
import SearchResult from "../search-result";

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


describe("SearchResult", () => {

  afterEach(cleanup);

  it("renders correctly", () => {

    const onClick = (video)=>{
      console.log("New search value " + video.id);
    }

    const tree = renderer
      .create(<SearchResult
                video={videoMock}
                lightTheme={false}
                onClick={onClick}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })


  it('calls "onClick" prop on button click', () => {

    // Render new instance in every test to prevent leaking state
    //const onClick = jest.fn();
    const lightThemeValue = false;
    let returnValue = '';

    const onClickFunc = (video)=>{
      returnValue = video.id;
    }

    const { getByTestId } = render(<SearchResult
                                      video={videoMock}
                                      lightTheme={lightThemeValue}
                                      onClick={onClickFunc}/>);

    fireEvent.click(getByTestId('searchResultImage'));
    expect(videoMock.id).toEqual(returnValue);

    expect(getByTestId('searchResult')).toHaveStyle(`background-color: '#293447'`);

  });

  it('calls "onClick" prop on button click 2', () => {

    // Render new instance in every test to prevent leaking state
    //const onClick = jest.fn();
    const lightThemeValue = true;


    const onClickFunc = (video)=>{
      let returnValue = video.id;
    }

    const { getByTestId } = render(<SearchResult
                                      video={videoMock}
                                      lightTheme={lightThemeValue}
                                      onClick={onClickFunc}/>);


    expect(getByTestId('searchResult')).toHaveStyle(`background-color: '#a7aebc'`);  //Light Value


  });
})


