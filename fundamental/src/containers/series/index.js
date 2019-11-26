import React, { Component } from 'react';
import Intro from '../../components/Intro' //Importing the 'Intro' Library for intro message
import SeriesList from '../../components/SeriesList'; //Importing the SeriesList Library to render list of TV show names
//import loader from '../../components/Loader';

class Series extends Component{
    //!State is a feature of the Component class.
  //* A state can be defined as plain JS object to which the component reacts and renders what is required at the time.
  //Creating a State object
  state = {
    series: [], //Array for scalable and dynamic storing and easy retrieval of data and elements
    seriesName: '', //Keeping a track of what is being fetched.
    isFetching: false //To know when the API calls are made
  }

  //!Making use of Lifecycle events that can be invoked when the component mounts, unmounts, receives props, etc;
  //*Using the 'componenetDidMount()' function
  /*
  componentDidMount(){
      THIS IS MOVED TO THE ON CHANGE EVENT HANDLER FUNCTION
    /
    //!It will be immediately invoked after the component has been rendered.
    const series = ["Vikings","Game Of Thrones"];
    setTimeout(() =>{
      this.setState({
        //!'setState' tells React that this component and its children should be rendered in updated state
        //* Taking the series object from 'state' and assigning the newly made series array to it
        //this.setState({this is an object parameter})
        //series: series //!This can be also written as follows when the names are same
        series
      });
    }, 2000);
    /
    fetch('http://api.tvmaze.com/search/shows?q=Vikings') //Fetching the API's page with 'Vikings' search term
    //Fetch returns a 'promise' and it can be resolved as follows.
    //Chaining the the'then' method. Promises allow chaining of methods such that the next can use the previous' output. 
    //.then((response)=> {console.log(response)}) //!Making an API call to Tymaze fetch TV Shows information.  
    .then(response => response.json()) //* Fetching the response in JSON file.
    .then(json => this.setState({ series: json })); //Setting the component state to the no. of items in the JSON array.
  } */
    //!FIRED WHEN THERE IS AN INPUT
    onSeriesInputChange = e =>{
        /*
        //!DEGBUGGING
        console.log(e) //Logging the event 
        console.log(e.target.value) //Logging input's value
        */
        this.setState({seriesName: e.target.value, isFetching: true}) //Setting the seriesName to the input field's value and acknowledging the starting of fetching process
        // The `` allows for string interpolation / manipulation of string.
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ series: json, isFetching: false })); //Getting the data in JSON format and aknowledging the stopping of fetching process
        
    }
    render(){
        // Getting all the properties from the state inside the render method.
        const { series, seriesName, isFetching } = this.state;
        return(
            <section>
                <Intro message="Find all your web-series and TV shows right here!" />
                {/* Displaying the length of the 'series' array in the state */}
                <h5 className="text-danger">You have to enable loading of scripts from top right of your address bar if you can't see the list!</h5>
                <h1>We currently have {this.state.series.length} shows at your disposal!</h1>
                <br/>
                <div className="container">
                    {/* Making the search box to make the input and searching more dynamic
                    The followig calls the onSeriesInputChange function when user inputs */}
                    <input value={seriesName} type="text" className="form-control" onChange={this.onSeriesInputChange} placeholder="Search for TV Shows here!"></input>
                    {/* Setting the value of the input to 'seriesName' will give an autocomplete effect. */}
                </div>

                {/* Checking if there are no results returned by the API (No Input)*/}
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <h4 className="text-muted">Try typing in the show's name!</h4>    
                }
                {/* Default message when there are no results to show */}
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <h4 className="text-danger">Oops! No shows with that name! <br/> Try typing a different term..</h4>
                }
                {/* Check for fetching to display loading GIF */}
                {
                    isFetching && <p>Loading shows! <i className="fas fa-tv fa-spin"></i></p>
                }
                {/* When fetched, show the results */}
                {
                    !isFetching && <SeriesList list={this.state.series}/>
                }
            </section>
        )
    }
}

export default Series;