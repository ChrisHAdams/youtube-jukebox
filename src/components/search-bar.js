import React from "react"
import Styled from 'styled-components';
import SearchField from '../atoms/search-field';
import SearchButton from '../atoms/search-button';
import SearchResetButton from '../atoms/search-reset-button';
import ThemeChangeButton from '../atoms/theme-change-button';

const SearchBarStyle = Styled.div`

  grid-area: SearchBar;
  display: flex;
  margin: 1px;
`

class SearchBar extends React.Component  {

  constructor(props) {
    super(props);
    console.log("Creating SearchBar");


  }

  render() {
    return (
      <SearchBarStyle data-testid="searchBar">
        <SearchField
          handleKeyPress={this.props.handleKeyPress}
          searchValue={this.props.searchValue}
          searchValueChange={this.props.searchValueChange}
          loggedIn={this.props.loggedIn}
        />
        <SearchButton searchOnClick={this.props.searchOnClick}/>
        <SearchResetButton resetOnClick={this.props.resetOnClick}/>
        <ThemeChangeButton onClick={this.props.themeChange}/>
      </SearchBarStyle>
    )
  }
}

export default SearchBar;
