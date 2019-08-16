import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Body from './Body'

import { HashRouter } from 'react-router-dom'

class Main extends Component {
  state = {
    playlists: '',
    search: '',
    searchResults: '',
    showInfo: '',
    redirect: false,
  }

  componentDidMount = () => {
    fetch(`${this.props.baseURL}/playlists`)
    .then(res => res.json())
    .then(playlists => this.setState({
      playlists: playlists
    }))
    .catch(err => console.log(err))
  }

  updatePlaylists = (newPlaylist) => {
    this.setState({
      playlists: newPlaylist
    })
  }

  clearSearchBar = () => {
    this.setState({
      search: '',
      redirect: true,
      searchResults: '',
    })
  }


  handleChange = (event) => {
    event.target.value
    ?
    this.setState({
      [event.target.id]: event.target.value,
    })
    :
    this.setState({
      [event.target.id]: event.target.value,
      searchResults: '',
      redirect: true
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.search)

    fetch(this.props.baseURL + '/search/' + this.state.search)
    .then(res => res.json())
    .then(json => this.setState({
      searchResults: json
    }))
    .catch(err=> console.log(err))
  }

  updateShowInfo = (info, type) => {
    fetch(`${this.props.baseURL}/${type}s/${info}`)
      .then(res => res.json())
      .then(json => this.setState({
        showInfo: json,
        redirect: false,
      }))
      .catch(err=>console.log(err))
  }



  render(){
    return(
      <>
      <HashRouter>
      <div className="sidebar">
        <Sidebar
          playlists={this.state.playlists}
          clearSearchBar={this.clearSearchBar}
         />
      </div>
      <div className="body">
        <Body
          baseURL = {this.props.baseURL}
          playlists={this.state.playlists}
          updatePlaylists={this.updatePlaylists}
          updateShowInfo={this.updateShowInfo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          search={this.state.search}
          searchResults={this.state.searchResults}
          showInfo={this.state.showInfo}
          redirect={this.state.redirect}
         />
      </div>
      </HashRouter>
      </>
    )
  }

}

export default Main
