import React, { Component } from 'react'
import ShowAlbumHeader from './ShowAlbumHeader'
import Table from './Table'

class ShowAlbum extends Component {
  render() {
    return(
      <>
      <div className="showpage">
      {
        this.props.showInfo
        ?
        <>
        <div className="showTableHeader">
          <ShowAlbumHeader
            showInfo={this.props.showInfo}
           />
        </div>
        <Table
          showInfo={this.props.showInfo}
          baseURL={this.props.baseURL}
        />
      </>





         :
         null
      }
      </div>
      </>
    )
  }
}

export default ShowAlbum
