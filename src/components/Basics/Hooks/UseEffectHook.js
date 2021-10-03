import {useState, useEffect} from 'react';
import LoadingSpinner from './assets/LoadingSpinner';
import NewsTable from './assets/NewsTable';
const UseEffectHook = () =>{
   const [count, setCount] = useState(0);
   // Run the function everytime state changes
   useEffect(()=>{
       alert(count);
   });

   
   /*
    Run the function on load once upon initialization
    [] is an array dependencies that are tracked to manage state when the dependency value/state changes!
    An empty dependency is used to avoid the infinte fetch loop in useEffect
   */
   
   const [loaded, setLoaded] = useState([]);
   useEffect(()=>{
       loadData();
   }, []);

   //Runs the function once on initialization and every time count changes state.
   const [news, setNews] = useState([]);
   useEffect(()=>{
       loadDataDep();
   }, [count]);
   

   //Runs the function once on initialization and exits with a teardown code.
//    useEffect(()=>{
//        console.log("Something ran");
//        return () => alert("Done running");
//    })
   //Function to fetch news articles from NewsAPI
   const loadData = async() =>{
       const response = await fetch('http://newsapi.org/v2/top-headlines?country=in&pageSize=2&apiKey=8b24a3b6917a469cb37cbfffb1a10e1f');
       const data = await response.json();
       setLoaded(data.articles);
   }

   const loadDataDep = async() =>{
       alert('Realoding after count!');
        const response = await fetch('http://newsapi.org/v2/top-headlines?country=us&pageSize=2&apiKey=8b24a3b6917a469cb37cbfffb1a10e1f');
        const data = await response.json();
        setNews(data.articles);
    }

    return(
        <section className="p-5">
            <div className="contianer p-5 border border-primary" style={{borderRadius: "20px"}}>
                
                <span className="text-center">
                    <h1>useState with useEffect Example</h1>
                    <p>The most common usecase for the useEffect function is <br/>to show a loading animation while fetching the data and updating component's data once the fetching is complete!</p>
                </span>
                <br/>
                <span>
                   The <strong>useEffect</strong> hook actually combines three methods of the component's life-cycle events into a function!<br/>
                   <small className="text-muted">It calls them "side effects" BTW.</small><br/>
                    <ul>
                        <li><article><strong>componentDidMount()</strong>: This is like the "ON" switch for the component, running only once per life-cycle, indicating the successful render of the component.</article></li>
                    
                        <li><article><strong>componentDidUpdate()</strong>: This is the update clause of the component, running once per every trigger/update in state of the component.</article></li>
                    
                        <li><article><strong>componentWillUnmount()</strong>: This is like the "OFF" switch for the component, running only once per life-cycle, indicating the successful end/destruction of the component.</article></li>
                    
                    </ul>
                </span>
                <div className="container border border-danger p-3 text-center mt-3">
                    <h2>Alerting Count with useEffect</h2>
                    <p>Clicking on the button will update its value with useState and show an alert with useEffect!</p>
                    <br/>
                    <button className="btn btn-lg btn-primary" onClick={() => setCount(count+1)}>{count}</button>
                    
                </div>
                <div className="container text-center mt-3 border border-danger p-3">
                    <h2>Fetching From API with useEffect</h2>
                    <p>You will see a loading indicator while your data is being fetched from the <a href="http://newsapi.org/" title="Check out NewsAPI!">API</a>!</p>
                    {
                        loaded.length<1
                        &&
                        <div className="container text-center p-5 mt-2 mb-2">
                          <LoadingSpinner/>
                        </div>
                    }
                    
                    {
                        loaded.map((load, index) =>(
                            <NewsTable 
                                key = {index}
                                uid = {index}
                                author = {load.author}
                                title = {load.title}
                                description = {load.description}
                            />
                        ))
                    }
                </div>

                <div className="container text-center mt-3 border border-danger p-3">
                    <h2>Fetching with useEffect when count changes</h2>
                    <p>You will see a loading indicator while your data is being fetched from the <a href="http://newsapi.org/" title="Check out NewsAPI!">API</a>!</p>
                    {
                        news.length<1
                        &&
                        <div className="container text-center p-5 mt-2 mb-2">
                          <LoadingSpinner/>
                        </div>
                    }
                    
                    {
                        news.map((article, index) =>(
                            <NewsTable 
                                key = {index}
                                uid = {index}
                                author = {article.author}
                                title = {article.title}
                                description = {article.description}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default UseEffectHook;