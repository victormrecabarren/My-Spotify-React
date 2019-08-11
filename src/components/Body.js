import React, { Component } from 'react';
import Table from './Table'
import Playlisthead from './Playlisthead'

class Body extends Component {
  state = {
    currentSong: ''
  }

  displayInfo = (song) => {
    this.setState({
      currentSong: song
    })
  }

  render() {
    return(
      <>
      <div className="playlisthead">
        <Playlisthead
          currentSong={this.state.currentSong}
         />
      </div>
      <div className="playlist">
        <Table
          songs={this.props.songs}
          displayInfo={this.displayInfo}
        />
      </div>


      </>
    )
  }
}

export default Body
