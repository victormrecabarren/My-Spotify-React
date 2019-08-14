import React, { Component } from 'react'
import Table from './Table'

class Show extends Component {
  render() {
    return(
      <>
      {
        this.props.showInfo
        ?
        <img
          className="topResultImg"
          src={this.props.showInfo.images[0].url}
          alt={this.props.showInfo.name}
         />
         :
         null
      }
      </>
    )
  }
}

export default Show
