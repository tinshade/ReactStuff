import React from 'react';
// import './index.css';
import {Link} from 'react-router-dom';

/*
Using a Componenet within a component is a good practice.
It makes the code more readable.
any other child/sibling component can make use of it as long as it is within the parent component, achieving abstraction. 
*/

//*The following has a deconstructed 'prop' i.e. taking only the 'series' property
const SeriesListItems = ({ series }) =>(
    /* Keys help React identify which items have been added/removed or changed.
    The best way is to use a string to uniquely identify the sub-elements.
    Using the index as a key is also an option but should only be used as a last resort
    */
    
    <li className="App-link" key={series.show.id}>
        <Link to={{pathname: `/series/${series.show.id}`}}>
            {series.show.name}
        </Link>
    </li>
    
)
const SeriesList = props =>{
    return(
        <ul>
            {/* Using the list's map property to populate the unordered list */}
            {props.list.map(series => (
                // Accessing the show's name from the JSON array parsed from the API by the container(src/containers/index.js)
                <SeriesListItems series={series} key={series.show.id}/>               
            ))}
        </ul>
    )
}

export default SeriesList;