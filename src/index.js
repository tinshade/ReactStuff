import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import ModernNav from './components/ModernNav/ModernNav';
import TypingIndicator from './components/TypingIndicator/TypingIndicator';
import Basics from './components/Basics/Basics';
import UseStateHook from './components/Basics/Hooks/UseStateHook';
import UseEffectHook from './components/Basics/Hooks/UseEffectHook';
import UseContextHook from './components/Basics/Hooks/UseContextHook';
import TakingInput from './components/Basics/TakingInput';


const routing = (
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/modernav" component={ModernNav}/>
        <Route exact path="/typeanim" component={TypingIndicator}/>
        <Route exact path="/takinginput" component={TakingInput}/>

        <Route exact path="/Basics" component={Basics}/>
        <Route exact path="/Basics/useStateHook" component={UseStateHook}/>
        <Route exact path="/Basics/useEffectHook" component={UseEffectHook}/>
        <Route exact path="/Basics/useContextHook" component={UseContextHook}/>

      </Switch>
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
