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
    console.log('hi');
  }
  render(){
    return (
      <>
      <p>hello world</p>

      <Main />
      <Sidebar />
      <Body />
      <Console />
      </>
    )
  }
}

export default App;
