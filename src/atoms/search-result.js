import React from "react"
import Styled from 'styled-components';
import CleanseString from '../javascript/cleanse-string';

const SearchResultStyleLight = Styled.div`
  min-width: 10vw;
  max-width: 12vw;
  min-height:12vh;
  font-size:14px;
  margin: 4px;
  padding: 4px;
  font-family: arial;
  background-color: #a7aebc;
  border-radius: 3px 3px 3px 3px;
`

const SearchResultTextStyleLight = Styled.p `
  background-color: #a7aebc;
  color: #5d5e63;
  padding-bottom: 2px;
  padding-bottom: 4px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size:11px;
`

const SearchResultStyleDark = Styled.div`
  min-width: 10vw;
  max-width: 12vw;
  min-height:12vh;
  font-size:12px;
  margin: 4px;
  padding: 4px;
  font-family: arial;
  color: white;
  border-radius: 3px 3px 3px 3px;
  background-color: #293447;
`

const SearchResultTextStyleDark = Styled.p `

  background-color: #293447;
  color: #5d5e63;
  padding-bottom: 2px;
  padding-bottom: 4px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size:11px;

`

const ImageStyle = Styled.img`

  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4px;
  padding-bottom: 2px;
  margin-top: 2px;
  margin-bottom: 2px:
  background-color: #a7aebc;
  color: #a7aebc;
  border-radius: 3px 3px 3px 3px;

`

class SearchResult extends React.Component {

  handleClick = () => {
    this.props.onClick(this.props.video);
  }

  render() {

    const SearchResultStyle = this.props.lightTheme ? SearchResultStyleLight : SearchResultStyleDark;
    const SearchResultTextStyle = this.props.lightTheme ? SearchResultTextStyleLight : SearchResultTextStyleDark;
    const title = CleanseString(this.props.video.title);

    return (
      <div>
        <SearchResultStyle key={this.props.video.id} >
          <ImageStyle
            title={title}
            alt={title}
            src={this.props.video.thumbnails.default.url}
            onClick={this.handleClick}
            lightTheme={this.props.lightTheme} />
          <SearchResultTextStyle>{title.substring(0,25)}...</SearchResultTextStyle>
        </SearchResultStyle>
      </div>
    );
  }
}

export default SearchResult;