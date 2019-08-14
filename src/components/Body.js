import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Table from './Table'
// import Playlisthead from './Playlisthead'
import Search from './Search'
import Show from './Show'

class Body extends Component {
  state = {
    show_info: ''
  }

  updateShowInfo = (info) => {
    this.setState({
      show_info: info
    })
  }


  render() {
    return(

      <Router>
        <div className="searchpage">
          <Route
            path="/"
            exact
            render={(routeProps) => (
              <Search
              {...routeProps}
              baseURL={this.props.baseURL}
              updateShowInfo={this.updateShowInfo}
                />
              )}
            />
        </div>
        <div className="showpage">
        <Route
          path="/show"
          exact
          render={(routeProps) => (
            <Show
              {...routeProps}
              showInfo={this.state.show_info}
             />
           )}
          />
        </div>

      </Router>


      // <div className="playlisthead">
      //   <Playlisthead
      //
      //    />
      // </div>
      // <div className="playlist">
      //   <Table
      //
      //   />
      // </div>



    )
  }
}

export default Body
