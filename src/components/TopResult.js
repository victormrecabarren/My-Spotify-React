import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class TopResult extends Component {

  state = {
    iconStyle: {zIndex: "-10"},
    imageStyle: {filter: "brightness(100%)"}
  }

  hoverPlay(hovering) {
    hovering
    ?
    this.setState({
      style: {zIndex: "1"},
      imageStyle: {filter: "brightness(50%)"}
    })
    :
    this.setState({
      style: {zIndex: "-10"},
      imageStyle: {filter: "brightness(100%)"}
    })
  }

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
          to='/showartist'
          className="topResultsContainer"
          onMouseEnter={() => {
            this.hoverPlay(true)
          }}
          onMouseLeave={() => {
            this.hoverPlay(false)
          }}
          onClick={() => {
            this.props.updateShowInfo(this.props.topResult.artist_id, "artist")
          }}
          >
          <img
            src={this.props.topResult.img[0]
            ?this.props.topResult.img[0].url
            :'https://i.imgur.com/TEfaeVF.png'}
            alt={this.props.topResult.name}
            className="artistImage topResultImg link"
            style={this.state.imageStyle}
          />
          <svg
            className="icon-play"
            style={this.state.style}
            width="60px"
            height="60px"
            viewBox="-65 -50 200 200">
          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"></path></svg>
        </Link>
        :
        <Link
          to='/showalbum'
          className="topResultsContainer"
          onMouseEnter={() => {
            this.hoverPlay(true)
          }}
          onMouseLeave={() => {
            this.hoverPlay(false)
          }}
          onClick={() => {
            this.props.updateShowInfo(this.props.topResult.album_id, "album")
          }}
          >
          <img
            src={this.props.topResult.img[0].url}
            alt={this.props.topResult.name}
            className="link topResultImg"
            style={this.state.imageStyle}
          />
          <svg
            className="icon-play"
            style={this.state.style}
            width="60px"
            height="60px"
            viewBox="-65 -50 200 200">
          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"></path></svg>
        </Link>
      }

      {
        this.props.topResult.type==="artist"
        ?
        <Link
          to='/showartist'
          >
        <h5
          style={centerAlign}
          className="resultTitle link"
          onClick={() => {
            this.props.updateShowInfo(this.props.topResult.artist_id, "artist")
          }}
          >
          {this.props.topResult.name}
        </h5>
      </Link>
        :
        <Link
          to='/showalbum'
          >
        <h5
          className="resultTitle link"
          onClick={() => {
            this.props.updateShowInfo(this.props.topResult.album_id, "album")
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
          to='/showalbum'
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
