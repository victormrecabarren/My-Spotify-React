import React, { Component } from 'react'

class ArtistResults extends Component {
  render() {
    const {artists} = this.props
    return(
      <>
      <div className="categoryResultsHeader">
        <h3>Artists</h3>
        <span className="seeAll">SEE ALL</span>
      </div>
        <hr />
        <div className="categoryResultsBody">
        {
          artists.splice(0,4).map((artist, i) => (
            <div
              key={`${i} artist`}
              id={artist.artist_id}
              className="categoryResultContainer"
              >
              <img
                src={artist.img[0]
                ? artist.img[0].url
                : 'https://i.imgur.com/TEfaeVF.png' }
                alt={artist.name}
                className="categoryImage artistImage"

              />
              <div className="resultsDescription">
                <h5 className="resultArtist">
                  {artist.name}
                </h5>
              </div>

            </div>
          ))

        }
      </div>
      </>
    )
  }
}

export default ArtistResults
