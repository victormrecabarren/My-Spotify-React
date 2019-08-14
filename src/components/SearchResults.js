import React, { Component } from 'react'
import TopResult from './TopResult'
import AlbumResults from './AlbumResults'
import ArtistResults from './ArtistResults'
import TrackResults from './TrackResults'

class SearchResults extends Component {
  render() {
    const { topResult, albums, artists, tracks } = this.props.searchResults
    return(
      <>
      <div className="topResult">
        <TopResult
          topResult={topResult[0]}
          updateShowInfo={this.props.updateShowInfo}
          baseURL={this.props.baseURL}
        />
      </div>
      {
        albums
        ? <div className="categoryResults">
          <AlbumResults
            albums={albums}
            updateShowInfo={this.props.updateShowInfo}
            baseURL={this.props.baseURL}
           />
         </div>
        : null
      }
      {
        artists.length
      ? <div className="categoryResults">
        <ArtistResults
          artists={artists}
          updateShowInfo={this.props.updateShowInfo}
          baseURL={this.props.baseURL}
        />
      </div>
      : null
      }
      {
        tracks
      ? <div className="categoryResults">
          <TrackResults
            tracks={tracks}
            updateShowInfo={this.props.updateShowInfo}
            baseURL={this.props.baseURL}
           />
        </div>
      : null
      }

    </>
    )
  }
}

export default SearchResults
