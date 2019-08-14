import React, { Component } from 'react'

class TrackResults extends Component {
  render() {
    const {tracks} = this.props
    return(
      <>
      <div className="categoryResultsHeader">
        <h3>Songs</h3>
        <span className="seeAll">SEE ALL</span>
      </div>
        <hr />
        <div className="categoryResultsBody">
        {
          tracks.splice(0,4).map((track, i) => (
            <div
              key={`${i} track`}
              id={track.track_id}
              className="categoryResultContainer"
              >
              <img
                src={track.img[0].url}
                alt={track.name}
                className="categoryImage"

              />
              <div className="resultsDescription">
                <h5 className="resultTitle">
                  {track.name}
                </h5>
                <h6 className="resultSubline">
                  {track.artist}
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

export default TrackResults
