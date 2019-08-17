import React, { Component } from 'react'

class PlaylistBody extends Component {
  render() {
    return(
      <p>{this.props.playlist.playlist_name}</p>
    )
  }
}

export default PlaylistBody
