import React from "react"
import Styled from 'styled-components';
import YouTubeSearch from 'youtube-search';
import SearchBar from './search-bar';
import SearchResults from './search-results';
import ApiKey from '../config/apiKey';

const SearchPanelStyle = Styled.div`
  grid-area: SearchPanel;
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  border-radius: 3px 3px 3px 3px;
  background-color: #f4f5f7;
  margin-top: 2px;
  margin-bottom: 6px;
  border-top: 2px;
`

class SearchPanel extends React.Component  {

  constructor(props) {
    super(props);

    this.state={
      searchValue:'',
      searchResults:[]
    };

    this.searchValueChange = this.searchValueChange.bind(this);
    this.searchValueReset = this.searchValueReset.bind(this);
    this.youTubeSearch = this.youTubeSearch.bind(this);

  }

  searchValueChange(event){
    console.log("New search value " + event.target.value);
    this.setState({searchValue:event.target.value});
  }

  searchValueReset(){
    console.log("Reset Clicked");
    this.setState({searchValue:'', searchResults:[]});
  }

  updateResults(err, results){
    if(err) return console.log(err);

    console.dir(results);
    return results;
  }

  youTubeSearch(){
    console.log("Searching for '" + this.state.searchValue + "'.");

    this.setState({searchResults: []});

    this.searchPromise()
      .then(results => this.setState({searchResults: results}))
      .catch(err => console.log(err));
  }


  searchPromise(){

    var opts = {
      maxResults: 20,
      key: ApiKey
    };

    return new Promise(
      (resolve, reject) => {

        YouTubeSearch(this.state.searchValue, opts, function(err, results) {

          if (err) reject(err);
          console.log("Search completed.");
          resolve(results);
        })
      }
    );
  }

  render() {
    return (
      <SearchPanelStyle>
        <SearchBar
          searchValue={this.state.searchValue}
          searchValueChange={this.searchValueChange}
          loggedIn={this.props.loggedIn}
          searchOnClick={this.youTubeSearch}
          resetOnClick={this.searchValueReset}
          lightTheme={this.props.lightTheme} />
        <SearchResults
          results={this.state.searchResults}
          pushVideoToQueue={this.props.pushVideoToQueue}
          lightTheme={this.props.lightTheme} />
      </SearchPanelStyle>
    )
  }
}

export default SearchPanel;
