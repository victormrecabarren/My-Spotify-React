import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Body from './Body'

class Main extends Component {





  render(){
    return(
      <>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="body">
        <Body
          baseURL = {this.props.baseURL}
         />
      </div>
      </>
    )
  }

}

export default Main
