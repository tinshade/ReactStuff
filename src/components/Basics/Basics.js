import React from 'react';

const Basics = () =>{
    return (
        <div className="Basics_App">
        <h1>Welcome to the Basics Section!</h1>
        <br/>
        <div>
            <h3>Here are the links to all of the basics with examples!</h3>
            <div>
            <ul type="disc">
                <li>
                    <a href="/Basics/UseStateHook" title="Check out the useState Hook Example">Use State Hook example</a>
                </li>
                <li>
                    <a href="/Basics/UseEffectHook" title="Check out the useEffect Hook Example">Use Effect Hook example</a>
                </li>
                <li>
                    <a href="/Basics/UseContextHook" title="Check out the useContext Hook Example">Use Context Hook example</a>
                </li>
            </ul>
            </div>
        </div>
        </div>
    );
}
export default Basics;