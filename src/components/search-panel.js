import React from "react"
import Styled from 'styled-components';
import YouTubeSearch from 'youtube-search';
import SearchBar from './search-bar';
import SearchResults from './search-results';
import ApiKey from '../config/apiKey';
import MyApiKey from '../config/apiKeyMine';

const SearchPanelStyleLight = Styled.div`
  grid-area: SearchPanel;
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  border-radius: 3px 3px 3px 3px;
  background-color: #f4f5f7;
  margin-top: 2px;
  margin-bottom: 4px;
  border-top: 2px;
  margin-left: 3px;
`

const SearchPanelStyleDark = Styled.div`
  grid-area: SearchPanel;
  box-shadow: inset 0 1px 2px 0 hsla(0, 0%, 0%, 0.08);
  border-radius: 3px 3px 3px 3px;
  background-color: #293447;
  margin-top: 2px;
  margin-bottom: 4px;
  margin-left: 3px;
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
    this.apiKey = '';

    if(ApiKey.length > 0) {
      this.apiKey = ApiKey;
    } else {
      this.apiKey = MyApiKey;
    }

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
      key: this.apiKey
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
    const SearchPanelStyle = this.props.lightTheme ? SearchPanelStyleLight : SearchPanelStyleDark;

    return (
      <SearchPanelStyle>
        <SearchBar
          searchValue={this.state.searchValue}
          searchValueChange={this.searchValueChange}
          loggedIn={this.props.loggedIn}
          searchOnClick={this.youTubeSearch}
          resetOnClick={this.searchValueReset}
          lightTheme={this.props.lightTheme}
          themeChange={this.props.themeChange} />
        <SearchResults
          results={this.state.searchResults}
          pushVideoToQueue={this.props.pushVideoToQueue}
          lightTheme={this.props.lightTheme} />
      </SearchPanelStyle>
    )
  }
}

export default SearchPanel;
