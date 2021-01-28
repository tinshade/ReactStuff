import React, {useEffect, useState, createContext, useContext} from 'react';

const pi = {v1: 3.14, v2:3.14259};
const pi_value = createContext(pi);



const UseContextHook = () =>{
    return(
        <section className="p-5">
            <div className="container p-5 text-center border border-primary" style={{borderRadius:"20px"}}>
                <h1>useContext Hook Example</h1>
                <p>The button's value updates using the useState Hook without the class based constructor!</p>
                
            </div>
        </section>
    );
}

export default UseContextHook;