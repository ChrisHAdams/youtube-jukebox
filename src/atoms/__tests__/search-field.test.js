import React from "react"
import renderer from "react-test-renderer"
import {render, fireEvent} from 'react-testing-library'

import SearchField from "../search-field";


describe("SearchField", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SearchField/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

it('calls "onClick" prop on button click', () => {
  // Render new instance in every test to prevent leaking state
  let disabled = false;
  let searchValue = '';
  let searchValueChange = (event)=>{
    //console.log("New search value " + event.target.value);
    searchValue = event.target.value;
  }

  const { getByTestId } = render(<SearchField
                                  searchValueChange = {searchValueChange}
                                  searchValue = {searchValue}
                                  disable = {disabled} />);

  fireEvent.change(getByTestId('searchField'), { target: { value: 'TEST VALUE' } });
  expect(searchValue).toEqual('TEST VALUE');

  fireEvent.change(getByTestId('searchField'), { target: { value: 'New TEST VALUE' } });
  expect(searchValue).toEqual('New TEST VALUE');

});
