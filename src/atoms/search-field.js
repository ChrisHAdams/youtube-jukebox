import React from "react"
import Styled from 'styled-components';

const SearchField= Styled.input`

  grid-area: SearchBar;
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  border-radius: 3px 3px 3px 3px;
  min-width: 30vw;
  min-height:20px;
  font-size:18px;
  margin: 1px;
`

export default (props) =>
<div>
  <SearchField
    data-testid="searchField"
    type="text"
    name="searchField"
    placeholder="Search for videos"
    value={props.searchValue}
    onChange={props.searchValueChange}
    disabled={!props.loggedIn}
    onKeyPress={props.handleKeyPress}/>

</div>

