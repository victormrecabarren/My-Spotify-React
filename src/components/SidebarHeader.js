import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SidebarHeader extends Component {
  render() {
    return(
    <>
      <div>Home</div>
      <Link to="/">
      <div
        onClick={this.props.clearSearchBar}
        >Browse</div>
      </Link>
      <div>Radio</div>
    </>
    )
  }
}

export default SidebarHeader
