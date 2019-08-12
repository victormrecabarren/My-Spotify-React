import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Table from './Table'
// import Playlisthead from './Playlisthead'
import Search from './Search'
import Show from './Show'

class Body extends Component {
  state = {

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
              />
            )}
          />
      </div>
        <div className="showpage">
        <Route path="/results" exact
          component={Show} />
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
