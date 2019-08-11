import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Console from './components/Console'



class App extends Component {


  render(){
    return (
      <>
      <div className="maincontainer">
        <div className="main">
          <Main
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
