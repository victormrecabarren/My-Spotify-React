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
      viewPlaylist={this.props.viewPlaylist}
     />
     </div>
     <div className="sidebarFooter">
      footer
     </div>

    </>



    )
  }
}

export default Sidebar
