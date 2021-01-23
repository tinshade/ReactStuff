import {useState} from 'react';

const UseStateHook = () =>{

    const [count, setCount] = useState(0) //Setting initial state to 0

    return(
        <section className="p-5">
            <div className="container p-5 text-center border border-primary" style={{borderRadius:"20px"}}>
                <h1>useState Hook Example</h1>
                <p>The button's value updates using the useState Hook without the class based constructor!</p>
                <br/>
                <br/>
                <button className="btn btn-primary btn-lg" onClick={()=> setCount(count+1)}>{count}</button>
            </div>
        </section>
    );
}


export default UseStateHook;