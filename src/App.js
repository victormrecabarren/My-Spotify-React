import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Console from './components/Console'

import { baseURL } from './constants'



class App extends Component {


  render(){
    console.log(baseURL);
    return (
      <>
      <div className="maincontainer">
        <div className="main">
          <Main
            baseURL={baseURL}
            className="main"
           />
        </div>

        <div className="console">
          <Console />
        </div>
      </div>


      </>
    )
  }
}

export default App;
