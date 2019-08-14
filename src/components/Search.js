import React, { Component } from 'react'
import SearchResults from './SearchResults'
import SearchNoResults from './SearchNoResults'

class Search extends Component {
  state = {
    search: '',
    searchResults: ''
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



  //
  //
  //
  //
  // savedResults = {
  //   topResult: [
  //     {
  //       artist_id: "14DGJVYmuwwsdHmW8a02eM",
  //       name: "Antony & Cleopatra",
  //       img: [
  //       {
  //       height: 640,
  //       url: "https://i.scdn.co/image/bc0395908854f101691bd834ef989d23f0bf2233",
  //       width: 640
  //       },
  //       {
  //       height: 320,
  //       url: "https://i.scdn.co/image/66169133aaa86ebea6df2a41d6281e3ee6473346",
  //       width: 320
  //       },
  //       {
  //       height: 160,
  //       url: "https://i.scdn.co/image/02d7953d86f3ae61750e603b6c5470345fadfef0",
  //       width: 160
  //       }
  //       ],
  //       tracks: [],
  //       type: "artist"
  //     }
  //   ],
  //   albums: [
  //     {
  //     album_id: "2zbTrm2pIAErzFSopinkbN",
  //     name: "Cleopatra",
  //     artist: "The Lumineers",
  //     artist_id: "16oZKvXb6WkQlVAjwo2Wbg",
  //     img: [
  //     {
  //     height: 640,
  //     url: "https://i.scdn.co/image/cd663f4fcf6f0ce290a085d8b337a055aac7ac72",
  //     width: 640
  //     },
  //     {
  //     height: 300,
  //     url: "https://i.scdn.co/image/bae56f54e3d633a28c5f1be7d289af0ffad7a48a",
  //     width: 300
  //     },
  //     {
  //     height: 64,
  //     url: "https://i.scdn.co/image/8520ebc66f55d0ac9bb1999dbd270e3f78810435",
  //     width: 64
  //     }
  //     ],
  //     tracks: [],
  //     type: "album"
  //     },
  //     {
  //     album_id: "5fY8mYgYGkyaJ9XvVOzVQA",
  //     name: "Cleopatra (Deluxe)",
  //     artist: "The Lumineers",
  //     artist_id: "16oZKvXb6WkQlVAjwo2Wbg",
  //     img: [
  //     {
  //     height: 640,
  //     url: "https://i.scdn.co/image/cd663f4fcf6f0ce290a085d8b337a055aac7ac72",
  //     width: 640
  //     },
  //     {
  //     height: 300,
  //     url: "https://i.scdn.co/image/bae56f54e3d633a28c5f1be7d289af0ffad7a48a",
  //     width: 300
  //     },
  //     {
  //     height: 64,
  //     url: "https://i.scdn.co/image/8520ebc66f55d0ac9bb1999dbd270e3f78810435",
  //     width: 64
  //     }
  //     ],
  //     tracks: [],
  //     type: "album"
  //   },
  //   {
  //   album_id: "5fY8mYgYGkyaJ9XvVOzVQA",
  //   name: "Cleopatra (Deluxe)",
  //   artist: "The Lumineers",
  //   artist_id: "16oZKvXb6WkQlVAjwo2Wbg",
  //   img: [
  //   {
  //   height: 640,
  //   url: "https://i.scdn.co/image/cd663f4fcf6f0ce290a085d8b337a055aac7ac72",
  //   width: 640
  //   },
  //   {
  //   height: 300,
  //   url: "https://i.scdn.co/image/bae56f54e3d633a28c5f1be7d289af0ffad7a48a",
  //   width: 300
  //   },
  //   {
  //   height: 64,
  //   url: "https://i.scdn.co/image/8520ebc66f55d0ac9bb1999dbd270e3f78810435",
  //   width: 64
  //   }
  //   ],
  //   tracks: [],
  //   type: "album"
  // },
  // {
  // album_id: "5fY8mYgYGkyaJ9XvVOzVQA",
  // name: "Cleopatra (Deluxe)",
  // artist: "The Lumineers",
  // artist_id: "16oZKvXb6WkQlVAjwo2Wbg",
  // img: [
  // {
  // height: 640,
  // url: "https://i.scdn.co/image/cd663f4fcf6f0ce290a085d8b337a055aac7ac72",
  // width: 640
  // },
  // {
  // height: 300,
  // url: "https://i.scdn.co/image/bae56f54e3d633a28c5f1be7d289af0ffad7a48a",
  // width: 300
  // },
  // {
  // height: 64,
  // url: "https://i.scdn.co/image/8520ebc66f55d0ac9bb1999dbd270e3f78810435",
  // width: 64
  // }
  // ],
  // tracks: [],
  // type: "album"
  // }],
  //   artists: [
  //     {
  //     artist_id: "14DGJVYmuwwsdHmW8a02eM",
  //     name: "Antony & Cleopatra",
  //     img: [
  //     {
  //     height: 640,
  //     url: "https://i.scdn.co/image/bc0395908854f101691bd834ef989d23f0bf2233",
  //     width: 640
  //     },
  //     {
  //     height: 320,
  //     url: "https://i.scdn.co/image/66169133aaa86ebea6df2a41d6281e3ee6473346",
  //     width: 320
  //     },
  //     {
  //     height: 160,
  //     url: "https://i.scdn.co/image/02d7953d86f3ae61750e603b6c5470345fadfef0",
  //     width: 160
  //     }
  //     ],
  //     tracks: [],
  //     type: "artist"
  //     },
  //     {
  //     artist_id: "7mu52yh5bBhhJOyVndAEZW",
  //     name: "Cleopatra",
  //     img: [
  //     {
  //     height: 640,
  //     url: "https://i.scdn.co/image/f96db0b17595a605e48c7b17b8da6b4dc396e268",
  //     width: 640
  //     },
  //     {
  //     height: 300,
  //     url: "https://i.scdn.co/image/2450e5211a375df9f0f59a8e33ffe2c6430761d9",
  //     width: 300
  //     },
  //     {
  //     height: 64,
  //     url: "https://i.scdn.co/image/83b29c2fc6cf1a24fb9913a5d1ddc7e8e1ffc8ef",
  //     width: 64
  //     }
  //     ],
  //     tracks: [],
  //     type: "artist"
  //     }
  //   ],
  //   tracks: [
  //     {
  //     track_id: "3d8y0t70g7hw2FOWl9Z4Fm",
  //     track_number: 2,
  //     name: "Ophelia",
  //     explicit: false,
  //     artist: "The Lumineers",
  //     artist_id: "16oZKvXb6WkQlVAjwo2Wbg",
  //     album: "Cleopatra",
  //     album_id: "2zbTrm2pIAErzFSopinkbN",
  //     img: [
  //     {
  //     height: 640,
  //     url: "https://i.scdn.co/image/cd663f4fcf6f0ce290a085d8b337a055aac7ac72",
  //     width: 640
  //     },
  //     {
  //     height: 300,
  //     url: "https://i.scdn.co/image/bae56f54e3d633a28c5f1be7d289af0ffad7a48a",
  //     width: 300
  //     },
  //     {
  //     height: 64,
  //     url: "https://i.scdn.co/image/8520ebc66f55d0ac9bb1999dbd270e3f78810435",
  //     width: 64
  //     }
  //     ],
  //     type: "track"
  //     },
  //     {
  //     track_id: "2ToW7zhGCrVrLU4fiKj9U1",
  //     track_number: 3,
  //     name: "Cleopatra",
  //     explicit: false,
  //     artist: "The Lumineers",
  //     artist_id: "16oZKvXb6WkQlVAjwo2Wbg",
  //     album: "Cleopatra",
  //     album_id: "2zbTrm2pIAErzFSopinkbN",
  //     img: [
  //     {
  //     height: 640,
  //     url: "https://i.scdn.co/image/cd663f4fcf6f0ce290a085d8b337a055aac7ac72",
  //     width: 640
  //     },
  //     {
  //     height: 300,
  //     url: "https://i.scdn.co/image/bae56f54e3d633a28c5f1be7d289af0ffad7a48a",
  //     width: 300
  //     },
  //     {
  //     height: 64,
  //     url: "https://i.scdn.co/image/8520ebc66f55d0ac9bb1999dbd270e3f78810435",
  //     width: 64
  //     }
  //     ],
  //     type: "track"
  //     },
  //   ]
  // }
  //
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     searchResults: this.savedResults
  //   })
  // }



  render() {
    return(

    <>

    <div className="searchbar">

      <form
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
    {
      this.state.searchResults
      ?
      <div className="searchResultsComponent">
        <SearchResults
          searchResults={this.state.searchResults}
          updateShowInfo={this.props.updateShowInfo}
          baseURL = {this.props.baseURL}
        />
      </div>
      :
      <div className="searchNoResultsComponent">
        <SearchNoResults />
      </div>
    }




  </>
    )
  }
}

export default Search
