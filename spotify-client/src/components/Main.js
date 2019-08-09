import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Body from './Body'

class Main extends Component {
  state = {
    songs: ''
  }

  componentDidMount() {
    this.getSongs()
  }

  getSongs = () => {
    fetch(`http://localhost:3000/songs`)
      .then(res => res.json())
      .then(json => this.setState({
        songs: json
        }))
      .catch(err => console.log(err))
  }
  render(){
    return(
      <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body">
        <Body
          songs={this.state.songs}
         />
      </div>
      </>
    )
  }

}

export default Main
