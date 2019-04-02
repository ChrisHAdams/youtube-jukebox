import React from "react"
import renderer from "react-test-renderer"

import SearchResetButton from "../search-reset-button";

describe("SearchResetButton", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SearchResetButton/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})