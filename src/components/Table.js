import React, { Component } from 'react';
import OptionsCard from './OptionsCard'

class Table extends Component {

  state = {

  }

  handleHover = (id, bool) => {
    this.setState({
      [id]: bool
    })
  }

  displayOptionsCard = (id) => {
    this.state[id]
    ?
    this.setState({
      [id]: ''
    })
    :
    this.setState({
      [id]: 'clicked'
    })
  }



  render() {
    return(
      <>
      <table className="table table-hover table-dark">
        <thead className="sticky-top">
          <tr>
            <th
            style={{width: "50px"}}
            scope="col">#</th>
            <th
            style={{width: "50px"}}
            scope="col"> </th>
            <th scope="col" colSpan="10"
            className="tableTextLeft"
            style={{textAlign: "left"}}>TITLE</th>
            <th
              className="tableTextRight"
              scope="col">TIME</th>

          </tr>
        </thead>

        <tbody>

          {
            this.props.showInfo ?
            this.props.showInfo.tracks.map((track, i) => (
              <>
              <tr
                onMouseEnter={() => {
                  this.handleHover(track.id, true)
                }}
                onMouseLeave={() => {
                  this.handleHover(track.id, false)
                }}
              >
                <th
                 scope="row">{i+1}</th>
                <th>&hearts;</th>
                <td colSpan="10">{track.name}</td>
                <td
                style={{textAlign:"right"}}
                >
                { this.state[track.id] ? <div
                    className="trackOptionsIcon"
                    onClick={() => {
                      this.displayOptionsCard(track.name)
                    }}
                  >&#183;&#183;&#183;</div>
                : null
                }

                {
                  this.state[track.name]=="clicked"
                  ?

                  <OptionsCard
                    showInfo={this.props.showInfo}
                    selected={track}
                    baseURL={this.props.baseURL}
                  />

                  : null
                }

                {track.duration}
                </td>
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
