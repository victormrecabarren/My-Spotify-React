import React, { Component } from 'react'

class DeleteTrackCard extends Component {
  render() {
    return(
      <div
        className="optionsCard"
        onMouseLeave={() => {
          this.props.hideOptionsCard(this.props.selected.name)
        }}
        >
      <div>
        <p>
          Add to Queue
        </p>
      </div>
      <div>
        <p>
        Go to Song Radio
        </p>
      </div>
      <div>
        <p>
          Go to Artist
        </p>
      </div>
      <div>
        <p>
          Show Credits
        </p>
      </div>
      <div>
        <p>
        Save to your Liked Songs
        </p>
      </div>
      <div>
        <p>
          Share
        </p>

      </div>
      <div>
        <p style={{color: "rgba(160, 0, 0, 1)"}}>
          Delete
        </p>

      </div>
      </div>
    )
  }
}

export default DeleteTrackCard
