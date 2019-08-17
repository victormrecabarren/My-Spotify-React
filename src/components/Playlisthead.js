import React, { Component } from 'react'

class Playlisthead extends Component {
  state = {
    editingPlaylistName: false,
    changeNameInput: '',
    playlistName: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.changeNameInput) {
      fetch(this.props.baseURL + '/playlists/'+ this.props.playlist.id, {
        method: 'PUT',
        body: JSON.stringify(
          {playlist: {playlist_name: this.state.changeNameInput}}),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(newName => this.setState({
          changeNameInput: '',
          editingPlaylistName: false,
          playlistName: newName.playlist_name
        }))
        .catch(err=>console.log(err))
    }
  }

  editPlaylistName = (bool) => {
    this.setState({
      editingPlaylistName: bool,
    })
  }



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
         {
           this.state.editingPlaylistName
           ?
           <form
             autoComplete="off"
             onSubmit={this.handleSubmit}
             className="searchForm"
             onClick={() => {
               this.editPlaylistName(false)
             }}
             >
             <input
               autoFocus
               id="changeNameInput"
               type="text"
               value={this.state.changeNameInput}
               onChange={this.handleChange}
               placeholder="Change playlist name?"
             />
           </form>
           :
           <h1
             onClick={() => {
               this.editPlaylistName(true)
             }}
             >
             {this.state.playlistName || this.props.playlist.playlist_name}
           </h1>
         }
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
