import React, { Component } from 'react';
import SidebarHeader from './SidebarHeader'
import UserLibraries from './UserLibraries'


class Sidebar extends Component {
  render() {
    return(
    <>
    <div className="sidebarHeader">
    <SidebarHeader
      clearSearchBar={this.props.clearSearchBar}
     />
     </div>
     <div className="userLibraries">
    <UserLibraries
      playlists={this.props.playlists}
     />
     </div>



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
