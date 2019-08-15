import React, { Component } from 'react'

class OptionsCard extends Component {
  state = {
    addingToPlaylist: '',
    playlists: '',
    creatingPlaylist: false,
    playlistInput: ''
  }

  componentDidMount = () => {
    fetch(`${this.props.baseURL}/playlists`)
    .then(res => res.json())
    .then(playlists => this.setState({
      playlists: playlists
    }))
    .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(this.props.baseURL + '/playlists', {
      method: 'POST',
      body: JSON.stringify({playlist: {playlist_name: this.state.playlistInput}}),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
      })
    .then(createdPlaylist => createdPlaylist.json())
    .then(newPlayList => {
      let playlistCopy = [...this.state.playlists, {playlist_name: newPlayList.playlist_name}]
      this.setState({
        playlistInput: '',
        playlists: playlistCopy,
        creatingPlaylist: false,
      })
    })
    .catch(err=>console.log(err))

  }

  handleHover = (bool) => {
    this.setState({
      addingToPlaylist: bool
    })
  }

  newPlaylist = (song) => {
    this.setState({
      creatingPlaylist: true
    })
  }

  render(){
    return(
        <div className="optionsCard">
        <div>
          <p>
            Add to Queue
          </p>
        </div>
        <div>
          <p>
          Go to Song Radio
          </p>
        </div>
        <div>
          <p>
            Go to Artist
          </p>
        </div>
        <div>
          <p>
            Show Credits
          </p>
        </div>
        <div>
          <p>
          Save to your Liked Songs
          </p>
        </div>
        <div>
          <p
            onMouseEnter={() => {
              this.handleHover(true)
            }}
            onMouseLeave={() => {
              this.handleHover(false)
            }}
            >
            <div className="carrot">&#60;</div>Add to Playlist
            {
              this.state.addingToPlaylist
              ? <div
                  className="createPlaylistCard"
                  >
                    {this.state.creatingPlaylist?
                      <div>
                        <form
                          autoComplete="off"
                          onSubmit={this.handleSubmit}
                          className="searchForm"
                          >
                          <input
                            id="playlistInput"
                            type="text"
                            value={this.state.playlistInput}
                            onChange={this.handleChange}
                            placeholder="My Playlist #5"

                          />
                        </form>
                      </div>
                      :
                      <div
                      onClick={() => {
                        this.newPlaylist(this.props.selected)
                      }}>
                      New Playlist
                    </div>}
                    {
                      this.state.playlists.length
                      ?
                      <>
                      {this.state.playlists.map(playlist => (
                        <div>{playlist.playlist_name}</div>
                      ))}
                  </>
                    : null
                  }

                </div>
              : null
            }
          </p>

        </div>
        <div>
          <p>
            Share
          </p>

        </div>
        </div>
    )
  }
}

export default OptionsCard
