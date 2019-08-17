import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Playlisthead extends Component {
  state = {
    editingPlaylistName: false,
    changeNameInput: '',
    playlistName: '',
    deleteCardOpen: false,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.changeNameInput) {
      this.setState({
        editingPlaylistName: false,
        changeNameInput: '',
      })

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
        .then(updatedPlaylists => this.props.renamePlaylist(updatedPlaylists, updatedPlaylists[updatedPlaylists.length-1]))
        .catch(err=>console.log(err))
    }
  }

  editPlaylistName = (bool) => {
    this.setState({
      editingPlaylistName: bool,
    })
  }

  deletePlaylist = () => {
    fetch(this.props.baseURL + '/playlists/'+ this.props.playlist.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
      })
      .then(res=>res.json())
      .then(newPlaylists=>this.props.deleteOnePlaylist(newPlaylists))
      .catch(err=>console.log(err))
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
             className="editPlaylistForm"
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
             {this.props.playlist.playlist_name}
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
      <div
        className="deletePlaylistIcon"
        onClick={() => {
          this.setState({
            deleteCardOpen: !this.state.deleteCardOpen
          })
        }}
        >
          &#183;&#183;&#183;
        </div>
        {
          this.state.deleteCardOpen
          ?
          <Link to="/">
          <div
              className="playlistOptionsCard"
              onMouseLeave={() => {
                this.setState({
                  deleteCardOpen: false
                })
              }}
              onClick={() => {
                this.deletePlaylist()
              }}
            > <p>Delete playlist</p>
          </div>
        </Link>
          : null
        }

    </div>
   </div>

    )
  }
}

export default Playlisthead
