import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return(
    <>
      <h4>
        Sidebar component!
        {
          this.props.playlists.length
          ?
          this.props.playlists.map(playlist => (
            <p>{playlist.playlist_name}</p>
          ))
          : null
        }
      </h4>
    </>



    )
  }
}

export default Sidebar
