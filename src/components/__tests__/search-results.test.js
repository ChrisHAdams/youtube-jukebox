import React from "react"
import renderer from "react-test-renderer"
import SearchResults from "../search-results";

import {render, fireEvent, cleanup} from '@testing-library/react'
import {toHaveStyle, toHaveTextContent} from '@testing-library/jest-dom';

const resultsArray = [
  {
    id: "0",
    title: "First Result",
    thumbnails:{
      default:{
        url:"www.something"
      }
    }
  },
  {
    id: "1",
    title: "Second Result",
    thumbnails:{
      default:{
        url:"www.something"
      }
    }
  },
  {
    id: "2",
    title: "Third Result",
    thumbnails:{
      default:{
        url:"www.something"
      }
    }
  },
]

expect.extend({toHaveStyle})
expect.extend({toHaveTextContent})

describe("SearchResult", () => {

  afterEach(cleanup);

  it("renders correctly", () => {

    const onClick = (video)=>{
      console.log("New search value " + video.id);
    }

    const results = [];

    const tree = renderer
      .create(<SearchResults
                results={results}
                lightTheme={false}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a dark theme', () => {

    const lightThemeValue = false;

    const { getByTestId } = render(<SearchResults
                                      results={resultsArray}
                                      lightTheme={lightThemeValue}/>);


    expect(getByTestId('searchResults')).toHaveStyle(`background-color: '#293447'`);
    expect(getByTestId('searchResults')).toHaveTextContent('Second Result');

  });

  it('renders a light theme', () => {

    const lightThemeValue = true;

    const { getByTestId } = render(<SearchResults
                                      results={resultsArray}
                                      lightTheme={lightThemeValue}/>);


    expect(getByTestId('searchResults')).toHaveStyle(`background-color: '#f4f5f7'`);

  });

  it('renders a search results', () => {

    const lightThemeValue = true;

    const { getAllByTestId } = render(<SearchResults
                                      results={resultsArray}
                                      lightTheme={lightThemeValue}/>);

    let resArray = getAllByTestId('searchResultImage');
    expect (resArray.length).toEqual(3);


  });

})