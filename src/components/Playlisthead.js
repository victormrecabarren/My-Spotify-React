import React, { Component } from 'react'

class Playlisthead extends Component {
  render() {
    return(
      <>
      {
        this.props.currentSong
        ?
        <img src={`/images/${this.props.currentSong.img}`} style={{height:150}}
        />
        : null
      }
      </>
    )
  }
}

export default Playlisthead
