import React, { Component } from 'react'

class TopResult extends Component {
  render() {
    return(
      <div>
      <h3>Top Result</h3>
      <img
        src={this.props.topResult.img[0].url}
        alt={this.props.topResult.name}
      />
      <h5 className="resultTitle">
        {this.props.topResult.name}
      </h5>
      <h6 className="resultSubline">
        {this.props.topResult.artist}
      </h6>
      <h6 className="resultType">
        ALBUM
      </h6>
      </div>
    )
  }
}

export default TopResult
