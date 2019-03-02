import React from "react"
import Styled from 'styled-components';


const SearchResetButtonStyle = Styled.button`
margin: 1px;
`

class SearchResetButton extends React.Component  {

  render() {
    return (
      <SearchResetButtonStyle onClick={this.props.resetOnClick}>Reset</SearchResetButtonStyle>

    )
  }
}

export default SearchResetButton;