import React, { Component } from 'react'

class SearchResults extends Component {
  render() {
    const topResult = this.props.searchResults[0]
    return(
      <>
      <div className="topResult">
        <div>
        <h3>Top Result</h3>
        <img
          src={topResult.img[0].url}
          alt={topResult.name}
        />
        <h5 className="resultTitle">
          {topResult.name}
        </h5>
        <h6 className="resultSubline">
          {topResult.artist}
        </h6>
        <h6 className="resultType">
          ALBUM
        </h6>
        </div>
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
