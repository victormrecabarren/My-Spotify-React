import React, { Component } from 'react'

class SearchResults extends Component {
  render() {
    return(
      this.props.searchResults.map(result => (
        <>
          <img
            src={result.img[0].url}
            height="250"
            width="250"
            alt={result.name}
          />
        </>
      ))
    )
  }
}

export default SearchResults
