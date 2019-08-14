import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom'


import Search from './Search'
import ShowAlbum from './ShowAlbum'

class Body extends Component {
  state = {
    search: '',
    searchResults: '',
    showInfo: '',
  }

  handleChange = (event) => {
    event.target.value
    ?
    this.setState({
      [event.target.id]: event.target.value
    })
    :
    this.setState({
      [event.target.id]: event.target.value,
      searchResults: ''
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
        showInfo: json
      }))
      .catch(err=>console.log(err))
  }


  render() {
    return(
      <>
      <div className="searchbar">

        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className="searchForm"
          >
          <span id="magnifyingGlass">
            <svg viewBox="0 0 512 512" width="15" height="15">
              <path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" ></path>
            </svg>
          </span>
          <input
            id="search"
            type="search"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="Search"
          />
        </form>
      </div>

      <HashRouter>
          <Route
            path="/"
            exact
            render={(routeProps) => (
              <Search
              {...routeProps}
              baseURL={this.props.baseURL}
              updateShowInfo={this.updateShowInfo}
              searchResults={this.state.searchResults}

                />
              )}
            />
        <Route
          path="/showalbum"
          exact
          render={(routeProps) => (
            <ShowAlbum
              {...routeProps}
              showInfo={this.state.showInfo}
              baseURL={this.props.baseURL}
             />
           )}
          />
        <Route
          path="/showartist"
          exact
          render={(routeProps) => (
            <ShowAlbum
              {...routeProps}
              showInfo={this.state.showInfo}
             />
           )}
          />

      </HashRouter>

      </>
    )
  }
}

export default Body
