import React, { Component } from 'react'

class OptionsCard extends Component {
  state = {
    addingToPlaylist: '',
    // playlists: '',
    creatingPlaylist: false,
    playlistInput: ''
  }

  // componentDidMount = () => {
  //   fetch(`${this.props.baseURL}/playlists`)
  //   .then(res => res.json())
  //   .then(playlists => this.setState({
  //     playlists: playlists
  //   }))
  //   .catch(err => console.log(err))
  // }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.selected.images = this.props.selected.images[0].url


    if (this.state.playlistInput) {
    fetch(this.props.baseURL + '/playlists', {
      method: 'POST',
      body: JSON.stringify(
        {playlist:
          {
            playlist_name: this.state.playlistInput,
            seed_track: this.props.selected,
            seed_album: this.props.showInfo
          }
      }),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
      })
    .then(createdPlaylist => createdPlaylist.json())
    .then(newPlayList => {
      let playlistCopy = [...this.props.playlists, newPlayList]
      this.setState({
        playlistInput: '',
        // playlists: playlistCopy,
        creatingPlaylist: false,
      })
      this.props.updatePlaylists(playlistCopy)
    })
    .catch(err=>console.log(err))
    }
  }


  handleHover = (bool) => {
    this.setState({
      addingToPlaylist: bool
    })
  }

  newPlaylist = () => {

    this.setState({
      creatingPlaylist: !this.state.creatingPlaylist
    })
  }

  addToExistingPlaylist = (playlistId) => {
    this.props.selected.playlist_id = playlistId

    this.props.selected.images = this.props.selected.images[0].url

    fetch(this.props.baseURL + '/playlists/' + playlistId + '/tracks', {
      method: 'POST',
      body: JSON.stringify(
        {track: this.props.selected
      }),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        }
      })
    .then(createdTrack => console.log(createdTrack))
    .catch(err=>console.log(err))


    this.props.hideOptionsCard(this.props.selected.name)


  }

  render(){
    return(
        <div
          className="optionsCard"
          onMouseLeave={() => {
            this.props.hideOptionsCard(this.props.selected.name)
          }}
          >
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
                      <div
                        onClick={() => {
                          this.newPlaylist()
                        }}
                        >
                        <form
                          autoComplete="off"
                          onSubmit={this.handleSubmit}
                          className="searchForm"
                          >
                          <input
                            autoFocus
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
                        this.newPlaylist()
                      }}>
                      New Playlist
                    </div>}
                    {
                      this.props.playlists.length
                      ?
                      <>
                      {this.props.playlists.map(playlist => (
                        <div
                          onClick={() => {
                            this.addToExistingPlaylist(playlist.id)
                          }}
                          >{playlist.playlist_name}</div>
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
