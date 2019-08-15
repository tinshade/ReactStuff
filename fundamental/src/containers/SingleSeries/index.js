import React, { Component } from 'react';

class SingleSeries extends Component{
    state ={
        show: null
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response => response.json())
        .then(json => this.setState({ show: json })); //Getting the data in JSON format and aknowledging the stopping of fetching process
    }
    render(){
        const { show } = this.state;
        console.log(show);
        return(
            <div className="container-fluid">
                {/* Getting the ID passed in the URL with props
                 <h1>Single Series ID {this.props.match.params.id}</h1> */}

                {
                    show === null 
                    &&
                    <h4 className="text-muted">Loading.. <i className="fas fa-tv fa-spin"></i></h4>
                }

                {
                    show !== null
                    &&
                    <h1 className="text-primary">{show.name}</h1>
                    &&
                    <div className="row gifbg">
                        <div className="col-sm-12 col-lg-4 col-md-4 mt-2 mb-2">
                            <div className="card p-3">
                                <h4 className="card-header">{show.name}</h4>
                                <img className="card-img-top" src={show.image.medium} alt={show.name}/>
                                <div className="card=body">
                                    <p className="card-text">Ratings - {show.rating.average}</p>
                                    <p className="card-text">Premiered - {show.premiered}</p>
                                    <p className="card-text">No. of episodes = {show._embedded.episodes.length}</p>
                                </div>
                                <div className="card-footer">
                                    <p className="text-danger">Status - {show.status}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-8 mt-2 mb-2">
                            <div className="card">
                                <h1 className="card-header text-primary">{show.name}</h1> 
                                <div className="card-body">
                                    <img src={show.image.original} alt={show.name}/>
                                    <p className="card-text">{show.summary}</p>
                                </div>  
                            </div>                           
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default SingleSeries;