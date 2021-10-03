import React from 'react';
import ReactDOM, { render } from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'
// const App = () => {

class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {lat: null, errorMessage : ''}; 
    // }
    
    // Alternate method of initiating state
    state = {lat: null, errorMessage : ''};
    componentDidMount(){
        console.log("component mounted");
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            error => this.setState({errorMessage: error.message})
        );
    }

    componentDidUpdate(){
        console.log("Component updated");
    }

    render() {
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div>
                Error : {this.state.errorMessage}
                </div>);    
        }
        if(!this.state.errorMessage && this.state.lat){
            return (
                <SeasonDisplay lat={this.state.lat} />
                // <div>
                //     Latitude: {this.state.lat}
                // </div>
                );            
        }
        return <Spinner message="Please accept location request"/>;
        
    }
};

ReactDOM.render(<App/>, document.querySelector('#root'));
