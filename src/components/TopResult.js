import React, { Component } from 'react'

class TopResult extends Component {
  render() {
    return(
    <>
      <div>
      <h3>Top Result</h3>
      <img
        src={this.props.topResult.img[0].url}
        alt={this.props.topResult.name}
      />
      <h5 className="resultTitle">
        {this.props.topResult.name}
      </h5>
      {
        this.props.topResult.type!=="artist"
        ?
        <h6 className="resultSubline">
          {this.props.topResult.artist}
        </h6>
        : null
      }

      <h6 className="resultType">
        {this.props.topResult.type.toUpperCase()}
      </h6>
      </div>
    </>
    )
  }
}

export default TopResult
