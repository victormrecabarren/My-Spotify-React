import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class AlbumResults extends Component {
  render() {
    const {albums} = this.props
    return(
      <>
      <div className="categoryResultsHeader">
        <h3>Albums</h3>
        <span className="seeAll">SEE ALL</span>
      </div>
        <hr />
        <div className="categoryResultsBody">
        {
          albums.splice(0,4).map((album, i) => (
            // <Link
            //   to='/show'
            //   >
            <Link
              to="/showalbum"
              key={`${i} album`}
              id={album.album_id}
              className="categoryResultContainer"
              onClick={() => {
                this.props.updateShowInfo(album.album_id, "album")
              }}
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

            </Link>
          ))
        }
      </div>
      </>
    )
  }
}

export default AlbumResults
