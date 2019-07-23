import React from "react"
import renderer from "react-test-renderer"
import SearchButton from "../search-button";
import {render, fireEvent, cleanup} from '@testing-library/react'
import {toHaveStyle} from '@testing-library/jest-dom';

expect.extend({toHaveStyle});

describe("SearchButton", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SearchButton/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

it('calls "onClick" prop on button click', () => {
  // Render new instance in every test to prevent leaking state
  const onClick = jest.fn();
  const { getByTestId } = render(<SearchButton searchOnClick={onClick}/>);

  fireEvent.click(getByTestId('searchButton'));
  expect(onClick).toHaveBeenCalled();

});