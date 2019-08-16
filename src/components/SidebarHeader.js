import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SidebarHeader extends Component {
  render() {
    return(
    <>
      <div
        className="sidebarOptions"
        >Home</div>
      <div
        className="sidebarOptions"
        >
        <Link
          to="/">
          <div
            onClick={this.props.clearSearchBar}
          > Browse</div>
        </Link>
      </div>
      <div
        className="sidebarOptions"
        >Radio</div>
    </>
    )
  }
}

export default SidebarHeader
