import React, { Component } from 'react'
import Playlisthead from './Playlisthead'
import PlaylistBody from './PlaylistBody'

class ShowPlaylist extends Component {
  state = {
    playlist: ''
  }

  componentDidUpdate = () => {
    console.log(this.props.currentPlaylist);
    fetch(this.props.baseURL + `/playlists/${this.props.currentPlaylist.id}`)
    .then(res => res.json())
    .then(playlist => this.setState({
      playlist: playlist
    }))
    .catch(err => console.log(err))
  }

  render() {
    return(
      <>
      {
        this.state.playlist
        ?
      <>
        <Playlisthead
        playlist={this.state.playlist}
        baseURL={this.props.baseURL}
        renamePlaylist={this.props.renamePlaylist}
        />
        <PlaylistBody
          playlist={this.state.playlist}
          baseURL={this.props.baseURL}
        />
      </>
        :
        null
      }
      </>
    )
  }
}

export default ShowPlaylist
