import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Main from '../Main'; //Contains routes to different pages and renders components
import 'whatwg-fetch' // To make use of asynchronous calls


//function App(){
class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1><i className="fas fa-tv fa-2x"></i></h1> */}
          <h4 className="App-title">You have reached</h4>
          <br/>
          <i className="fas fa-crown fa-2x App-title hking"></i>
          <h1 className="App-title">TV Connoisseur</h1>

          {/* Replacing the following with a Component ('Intro')*/}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          {/*Refering to the Component 'Intro' from (components/Intro) folder*/}
          {/* <Intro /> */}

          {/* ADDING CUSTOM PROPERTY TO THE 'Intro' component */}
          {/* CUSTOM PROPERTY CAN BE A BOOLEAN, ARRAY OR EVEN A FUNCTION! */}
          
          {/* This is moved to containers/series/index.js
          <Intro message="Find all your web-series and TV shows right here!" /> */}
        </header>
        {/* RENDERING THE 'Series' Component(src/containers/series) from the Main Component using Router */}
        <Main />
      </div>
    );
  }
}

export default App;
