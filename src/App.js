import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Console from './components/Console'

let baseURL = `http://localhost:3000`

class App extends Component {


  render(){
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