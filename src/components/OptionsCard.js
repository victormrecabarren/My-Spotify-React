import React, { Component } from 'react'

class OptionsCard extends Component {
  state = {
    addingToPlaylist: '',
    playlists: '',
    creatingPlaylist: false,
    playlistInput: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props.selected);
    this.setState({
      creatingPlaylist: false,
      playlists: [{
        name: 'newplaylist1'
      }, {
        name: 'newplaytlist2'
      }]
    })
  }

  handleHover = (bool) => {
    this.setState({
      addingToPlaylist: true
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
                      this.state.playlists
                      ?
                      <>
                      {this.state.playlists.map(playlist => (
                        <div>{playlist.name}</div>
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
