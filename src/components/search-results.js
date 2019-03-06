import React from "react"
import Styled from 'styled-components';
import SearchResult from '../atoms/search-result'


const SearchResultsStyleLight = Styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  background-color: #f4f5f7;
  color: black;
`

const SearchResultsStyleDark = Styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  background-color: #5b75a0;
  color: white;
`

function SearchList(searchResults, onClickMethod, lightTheme) {

  const results = searchResults;

  const listItems = results.map((video) =>
    <SearchResult
      onClick={onClickMethod}
      key={video.id}
      video={video}
      lightTheme={lightTheme}/>
  );

  return listItems;

}

class SearchResults extends React.Component  {

  render() {

    const results = SearchList(this.props.results, this.props.pushVideoToQueue, this.props.lightTheme);
    const SearchResultsStyle = this.props.lightTheme ? SearchResultsStyleLight : SearchResultsStyleDark;

    return (
      <SearchResultsStyle>
        {results}
      </SearchResultsStyle>

    )
  }
}

export default SearchResults;
