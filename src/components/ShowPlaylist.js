import React, { Component } from 'react'
import Playlisthead from './Playlisthead'
import PlaylistBody from './PlaylistBody'

class ShowPlaylist extends Component {
  render() {
    return(
      <>
      <Playlisthead
        currentPlaylist={this.props.currentPlaylist}
      />
      <PlaylistBody
        currentPlaylist={this.props.currentPlaylist}
      />
      </>
    )
  }
}

export default ShowPlaylist
