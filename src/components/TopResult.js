import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class TopResult extends Component {
  render() {
    const centerAlign = {textAlign: 'center'}
    return(
    <>
      <div>
      <h3>Top Result</h3>
      {
        this.props.topResult.type==="artist"
        ?
        <Link
          to='/show'
          >
          <img
            src={this.props.topResult.img[0].url}
            alt={this.props.topResult.name}
            className="artistImage link"
            onClick={() => {
              this.props.updateShowInfo(this.props.topResult.artist_id)
            }}
          />
        </Link>
        :
        <Link
          to='/show'
          >
          <img
            src={this.props.topResult.img[0].url}
            alt={this.props.topResult.name}
            onClick={() => {
              this.props.updateShowInfo(this.props.topResult.album_id)
            }}
            className="link topResultImg"
          />
        </Link>
      }

      {
        this.props.topResult.type==="artist"
        ?
        <Link
          to='/show'
          >
        <h5
          style={centerAlign}
          className="resultTitle link"
          onClick={() => {
            this.props.updateShowInfo(this.props.topResult.artist_id)
          }}
          >
          {this.props.topResult.name}
        </h5>
      </Link>
        :
        <Link
          to='/show'
          >
        <h5
          className="resultTitle link"
          onClick={() => {
            this.props.updateShowInfo(this.props.topResult.album_id)
          }}
          >
          {this.props.topResult.name}
        </h5>
      </Link>
      }
      {
        this.props.topResult.type!=="artist"
        ?
        <Link
          to='/show'
          >
        <h6
          className="resultSubline link"
          onClick={() => {
            this.props.updateShowInfo(this.props.topResult.artist_id)
          }}
          >
          {this.props.topResult.artist}
        </h6>
        </Link>
        : null
      }

      {
        this.props.topResult.type==="artist"
        ?
        <h6
          className="resultType"
          style={centerAlign}
          >
          {this.props.topResult.type.toUpperCase()}
        </h6>
        :
        <h6 className="resultType">
          {this.props.topResult.type.toUpperCase()}
        </h6>
      }

      </div>
    </>
    )
  }
}

export default TopResult
