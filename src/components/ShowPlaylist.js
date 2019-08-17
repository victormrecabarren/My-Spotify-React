import React, { Component } from 'react'
import Playlisthead from './Playlisthead'
import PlaylistBody from './PlaylistBody'

class ShowPlaylist extends Component {
  state = {
    playlist: ''
  }

  componentDidMount = () => {
    console.log(this.props.currentPlaylist.id);
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
      <Playlisthead
        playlist={this.state.playlist}
      />
      <PlaylistBody
        playlist={this.state.playlist}
      />
      </>
    )
  }
}

export default ShowPlaylist
