import React, { Component } from 'react';

class Table extends Component {

  handleHover = (item) => {
    this.props.displayInfo(item)
  }

  render() {
    return(
      <>
      <table className="table table-hover table-dark">
        <thead className="sticky-top">
          <tr>
            <th scope="col">#</th>
            <th scope="col"> </th>
            <th scope="col" colSpan="2">Title</th>
            <th scope="col">Artist</th>
          </tr>
        </thead>

        <tbody>
          {
            this.props.songs ?
            this.props.songs.map((item, i) => (
              <>
              <tr
                onMouseEnter={() => {
                  this.handleHover(item)
                }}
                >
                <th
                 scope="row">{i+1}</th>
                <th>&hearts;</th>
                <td colSpan="2">{item.title}</td>
                <td>{item.artist}</td>
              </tr>
            </>
            ))
            : null
          }


        </tbody>
      </table>
    </>
    )
  }
}

export default Table
