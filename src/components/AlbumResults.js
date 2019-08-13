import React, { Component } from 'react'

class AlbumResults extends Component {
  render() {
    const {albums} = this.props
    return(
      <>
      <div className="categoryResultsHeader">
        <h3>Songs</h3>
        <span className="seeAll">SEE ALL</span>
      </div>
        <hr />
        <div className="categoryResultsBody">
        {
          albums.splice(0,4).map((album, i) => (
            <div
              key={`${i} album`}
              id={album.id}
              className="categoryResultContainer"
              >
              <img
                src={album.img[0].url}
                alt={album.name}
                className="categoryImage"

              />
              <div className="resultsDescription">
                <h5 className="resultTitle">
                  {album.name}
                </h5>
                <h6 className="resultSubline">
                  {album.artist}
                </h6>
              </div>

            </div>
          ))

        }
      </div>
      </>
    )
  }
}

export default AlbumResults
