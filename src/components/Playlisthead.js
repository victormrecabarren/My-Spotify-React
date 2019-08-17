import React, { Component } from 'react'

class Playlisthead extends Component {
  render() {

    let dateString = new Date(Date.parse(this.props.playlist.created_at)).toDateString().substring(4,100)

    return(
      <div className="playlistHeaderContainer">
      <div className="headerMainInfo">
      <img
        className="topResultImg"
        src={this.props.playlist.tracks[0].images}
        alt={this.props.playlist.tracks[0].name}
       />
       <div className="albumHeaderInfo">
         <p>PLAYLIST</p>
         <h1>
           {this.props.playlist.playlist_name}
         </h1>
         <h4>
           Created by <span>Victor</span>
         </h4>
         <h4>
           {dateString} &#183; {this.props.playlist.tracks.length} songs
         </h4>
       </div>
     </div>
     <div className="headerOptions">
      <button className="btn btn-success"><div>PLAY</div></button>
    </div>
   </div>

    )
  }
}

export default Playlisthead
