import React, { Component } from 'react'
import SearchResults from './SearchResults'
import SearchNoResults from './SearchNoResults'

class Search extends Component {


  render() {
    return(

    <>
    <div className="searchpage">


    {
      this.props.searchResults
      ?
      <div className="searchResultsComponent">
        <SearchResults
          searchResults={this.props.searchResults}
          updateShowInfo={this.props.updateShowInfo}
          baseURL = {this.props.baseURL}
        />
      </div>
      :
      <div className="searchNoResultsComponent">
        <SearchNoResults />
      </div>
    }



  </div>
  </>
    )
  }
}

export default Search
