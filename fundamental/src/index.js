import React from 'react'; //!Imports React Core.
import ReactDOM from 'react-dom'; //!Renders the application.
import './index.css'; //!Just for styling.
import App from './components/App/index.js';
import * as serviceWorker from './serviceWorker'; //!Enables faster loading of the application after first boot.
import {BrowserRouter} from 'react-router-dom';
/*

//Creating a simple function to get date and display using an 'arrow fucntion'.

const getCurrentDate = () =>{
    const date = new Date();
    return date.toDateString();
}

//*Creating a React Element to render in the container without JSX.
//const greeting = React.createElement('h1', {}, 'Hello there!');
//*Creating a React Element to render in the container with JSX.
//const greeting = <h1>Hello there!</h1>;
//*Creating a React Element with JSX and invoking a function(getCurrentDate) to get the current date.
//!Syntax to call a function is {function_name()}
const greeting = <h1>Hello there!<br/>The date is: {getCurrentDate()} </h1>;
ReactDOM.render(greeting, document.getElementById('root')); //!Rendering the App in the 'root' container.
*/
//!Rendering the App (A fully funcitonal React Element [App.js]) in the 'root' container.
ReactDOM.render(
    //!Encapsulating the App component within the BrowserRouter Component to keep track of the UI in sync with the URL.
<BrowserRouter><App /></BrowserRouter>, 
document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
