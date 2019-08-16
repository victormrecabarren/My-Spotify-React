import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class UserLibraries extends Component {
  render() {
    return(
      <>
      <p className="libraryHeaderText resultType">YOUR LIBRARY</p>
      <p className="libraryLinks">
        Made For You
      </p>
      <p className="libraryLinks">
        Recently Played
      </p>
      <p className="libraryLinks">
        Liked Songs
      </p>
      <p className="libraryLinks">
        Albums
      </p>
      <p className="libraryLinks">
        Artists
      </p>
      <p className="libraryLinks">
        Podcasts
      </p>

      <p className="libraryHeaderText resultType playlistsHeader">
        PLAYLISTS
      </p>
      {
        this.props.playlists.length
        ?
        this.props.playlists.map(playlist => (
          <p className="myPlaylists">{playlist.playlist_name}</p>
        ))
        : null
      }
      </>
    )
  }
}

export default UserLibraries
