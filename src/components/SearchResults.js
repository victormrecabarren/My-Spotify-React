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
        />
      </div>
      {
        albums
        ? <div className="categoryResults">
          <AlbumResults
            albums={albums}
           />
         </div>
        : null
      }
      {
        artists
      ? <div className="categoryResults">
        <ArtistResults
          artists={artists}
        />
      </div>
      : null
      }
      {
        tracks
      ? <div className="categoryResults">
          <TrackResults
            tracks={tracks}
           />
        </div>
      : null
      }



      {/* {
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
    } */}

    </>
    )
  }
}

export default SearchResults
