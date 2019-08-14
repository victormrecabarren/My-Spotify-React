import React, { Component } from 'react'
import SearchResults from './SearchResults'
import SearchNoResults from './SearchNoResults'

class Search extends Component {




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
    <div className="searchpage">


    {
      this.props.searchResults
      ?
      <div className="searchResultsComponent">
        <SearchResults
          searchResults={this.props.searchResults}
          updateShowInfo={this.props.updateShowInfo}
          baseURL = {this.props.baseURL}
        />
      </div>
      :
      <div className="searchNoResultsComponent">
        <SearchNoResults />
      </div>
    }



  </div>
  </>
    )
  }
}

export default Search
