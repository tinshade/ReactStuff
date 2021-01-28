import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const RoutingExample = () =>{
    return(
        <div>
            <Nav/>
            <Switch>
                <Router>
                    <Route exact path='/' component={Intro} />
                    <Route exact path='/routing-example/home' component={Home} />
                    <Route exact path='/routing-example/about' component={About} />
                </Router>
            </Switch>
        </div>
    );
}

const Intro = () =>{
    return(
        <section className="p-5">
            <div className="container p-5 text-center border border-primary" style={{borderRadius:"20px"}}>
                <h1>Routing With RouterDOM </h1>
                <h4>You have reached the main routing page!</h4>
                {/* 
                    I made use of inline CSS because I am just too lazy to make a CSS file just for a couple of custom styles. This is in no way "best practice" and do not be lazy like me!

                    KUDOS for reading the code BTW. :)
                */}
                <article style={{marginTop: "7%"}}>
                    <article>
                        The <span style={{backgroundColor:"lightgrey", padding:"4px", borderRadius:"9px"}}>Navbar</span> you see is a component and <span style={{backgroundColor:"lightgrey", padding:"4px", borderRadius:"9px"}}>Home</span> and <span style={{backgroundColor:"lightgrey", padding:"4px", borderRadius:"9px"}}>About</span> pages are two other components. Why would you use Router DOM to create and manage your pages and links when HTML has Anchor tags with HREF?
                    </article>
                    <br/>
                    <article>
                        Well since the components are technically loaded, when you switch links, you won't need to refresh the page! DOM just swaps the older element with the newer ones!
                    </article>
                    <br/>
                    <article>
                        Using <span style={{backgroundColor:"lightgrey", padding:"4px", borderRadius:"9px"}}>Switch</span> with <span style={{backgroundColor:"lightgrey", padding:"4px", borderRadius:"9px"}}>Route</span> is a common practice as Swtich will ensure that URL search and rending stops right after the first component matching the route is found! This section you see is exactly that. 
                    </article>
                </article>
            </div>
        </section>
    );
}

export default RoutingExample;