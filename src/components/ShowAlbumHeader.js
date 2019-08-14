import React, { Component } from 'react'
import Table from './Table'

class ShowAlbumHeader extends Component {
  render() {
    const { id, name, artist, images, release, total_tracks, tracks, type} = this.props.showInfo
    return(
      <div className="albumHeaderContainer">
      <div className="headerMainInfo">
      <img
        className="topResultImg"
        src={images[0].url}
        alt={name}
       />
       <div className="albumHeaderInfo">
         <p>{type.toUpperCase()}</p>
         <h1>
           {name}
         </h1>
         <h4>
           By <span>{artist}</span>
         </h4>
         <h4>
           {release} &#183; {total_tracks} songs
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

export default ShowAlbumHeader
