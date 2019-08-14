import React, { Component } from 'react'

class OptionsCard extends Component {
  state = {
    addingToPlaylist: '',
  }

  handleHover = (bool) => {
    this.setState({
      addingToPlaylist: true
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
                    <div
                      onClick={() => {
                        console.log('going to create playlist')
                      }}>
                      New Playlist
                    </div>
                    <div>
                      createplaylist
                    </div>
                    <div>
                      createplaylist
                    </div>

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
