import React from "react"
import renderer from "react-test-renderer"

import ThemeChangeButton from "../theme-change-button";
import {render, fireEvent, cleanup} from '@testing-library/react'
import {toHaveStyle} from '@testing-library/jest-dom';

expect.extend({toHaveStyle});

describe("ThemeChangeButton", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ThemeChangeButton/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

it('calls "onClick" prop on button click', () => {
  // Render new instance in every test to prevent leaking state
  const onClick = jest.fn();
  const { getByTestId } = render(<ThemeChangeButton onClick={onClick}/>);

  fireEvent.click(getByTestId('themeChangeButton'));
  expect(onClick).toHaveBeenCalled();

});