import React from 'react';
import loading from './loading.gif';
const LoadingSpinner = () => {
    return(
        <div className="container p-2">
            <img src={loading} alt="Loading..."/>
        </div>
    );
}

export default LoadingSpinner;