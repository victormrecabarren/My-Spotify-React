import React, { Component } from 'react'
import TopResult from './TopResult'

class SearchResults extends Component {
  render() {
    const topResult = this.props.searchResults[0]
    return(
      <>
      <div className="topResult">
        <TopResult
          topResult={topResult}
        />
      </div>

      {
      this.props.searchResults.filter((result,i)=>i!=0).map(result => (
        <>
          <img
            src={result.img[0].url}
            height="250"
            width="250"
            alt={result.name}
          />
        </>
      ))
    }

    </>
    )
  }
}

export default SearchResults
