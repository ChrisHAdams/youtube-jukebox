import React from "react"
import Styled from 'styled-components';

const SearchButton = Styled.button`
  margin: 1px;
`

export default (props) => <SearchButton data-testid="searchButton" onClick={props.searchOnClick}>Search</SearchButton>