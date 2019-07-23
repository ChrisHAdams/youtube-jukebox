import React from "react"
import renderer from "react-test-renderer"
import {render, fireEvent, cleanup} from '@testing-library/react'
import SearchBar from "../search-bar";
import {toHaveStyle} from '@testing-library/jest-dom';


expect.extend({toHaveStyle})

describe("SearchBar", () => {

  it("renders correctly", () => {

    const tree = renderer
      .create(<SearchBar
                searchValue={""}
                loggedIn={false}
                searchOnClick={"callback"}
                resetOnClick={"callback"}
                themeChange={"callback"}/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

})


