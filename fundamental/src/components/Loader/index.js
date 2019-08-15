import React from 'react';
import loaderSrc from '../../assets/loader.gif';

//!Creating the Loader component
const loader = props =>(
    <div>
        <img src={loaderSrc} alt='Loading...'/>
    </div>
);


export default loader;

