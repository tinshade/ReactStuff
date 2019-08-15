import React from 'react'; //Importing the React Library

//!Creating a variable to render JSX text in the body as a 'FUNCTIONAL COMPONENT'
//*A functional componenet is called so because it is just a JS function that returns React elements.
//*Lower-case component names refer to built-in components (will be considered as simple HTML tags) in React.
//*Upper-case refers to the custom-made components.
//*'props' is short for 'properties'

/*
const Intro = (props) =>(
    //!If only one argument is being passed then the additional parenthesis around 'props' can be ommited.
    //This is a shorthand syntax for 'arrow functions'.
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Know More!</a>
);
*/

const Intro = props =>(
    //!Just accessing the 'message' from the App.js file
    <h3>{props.message}</h3>
);
export default Intro; //! Exporting the Intro Component to be used in other files.

