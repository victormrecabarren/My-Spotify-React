import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Console from './components/Console'



class App extends Component {
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
    return (
      <>
      <p>hello world</p>

      {
        this.state.songs
        ? this.state.songs.map((entry,i) => (
          <img
            src={`/images/${entry.img}`}
            style={{height: 200}}
            key={i}
          />

        ))
        : null
      }


      <Main />
      <Sidebar />
      <Body />
      <Console />
      </>
    )
  }
}

export default App;
