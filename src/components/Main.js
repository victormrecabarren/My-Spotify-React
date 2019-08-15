import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Body from './Body'

class Main extends Component {
  state = {
    playlists: ''
  }

  componentDidMount = () => {
    fetch(`${this.props.baseURL}/playlists`)
    .then(res => res.json())
    .then(playlists => this.setState({
      playlists: playlists
    }))
    .catch(err => console.log(err))
  }

  updatePlaylists = (newPlaylist) => {
    this.setState({
      playlists: newPlaylist
    })
  }




  render(){
    return(
      <>
      <div className="sidebar">
        <Sidebar
          playlists={this.state.playlists}
         />
      </div>
      <div className="body">
        <Body
          baseURL = {this.props.baseURL}
          playlists={this.state.playlists}
          updatePlaylists={this.updatePlaylists}
         />
      </div>
      </>
    )
  }

}

export default Main
