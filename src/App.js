import './App.css';
import React from 'react';
import Clock from './Clock';
import ConditionalRendering from './ConditionalRendering';
import EventHandling from './EventHandling';
import ListAndKeys from './ListAndKeys';
import Forms from './Forms';
import LiftingStateup from './LiftingStateUp';
import CompositionVsInheritance from './CompositionVsInheritance';
import ThinkingInReact from './ThinkingInReact';
import UseStateHook from './UseStateHook';
import UseEffectHook from './UseEffectHook';
import Game from './Game';
import Context from './Context';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Post from './components/pages/Post';
import About from './components/pages/About';
import Dashboard from './components/pages/Dashboard';
import Navbar from './components/Navbar';
import waheguru from "./waheguru.jpg";
import ssdn from "./ssdn.jpeg";
import ErrorBoundaries from './ErrorBoundaries';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import TypeCheckingWithPrototypes from './TypeCheckingWithPrototypes';
import Error from './Error';
import RefInReact from './RefInReact';

export const MyContext = React.createContext();

class App extends React.Component {

  state = { name: 'prince', value: 10 };

  handleClickContext = () => {
    this.setState({value: this.state.value + 1});
  }
  render() {

    const contextValue = {
             data: this.state,
             handleClick: this.handleClickContext
    };
    let isLogged = false;
    const numbers = [1, 2, 3, 4, 56];
    return (
      <div>
        {/* <Clock /> */}
        {/* <ConditionalRendering /> */}
        {/* <EventHandling /> */}
        {/* <ListAndKeys numbers={numbers}/> */}
        {/* <Forms /> */}
        {/* <LiftingStateup /> */}
        {/* <CompositionVsInheritance /> */}
        {/* <ThinkingInReact /> */}
        {/* <UseStateHook /> */}
        {/* <RefInReact /> */}
        {/* <UseEffectHook /> */}
        {/* <TypeCheckingWithPrototypes name="prince" /> */}
        {/* <Error>
        <ErrorBoundaries like={waheguru} /> <br />
        </Error>

        <Error>
        <ErrorBoundaries like={ssdn} /> <br />
        </Error>

        <Error>
        <ErrorBoundaries like="no image" />
        </Error> */}
        {/* <Game /> */}
         {/* <MyContext.Provider value={contextValue}>
         <Context />
         </MyContext.Provider> */}
         {/* <BrowserRouter>
         <Navbar />
         <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} /> */}
         {/* <Route exact path="/contact" component={Contact} /> */}
         {/* <Route exact path="/post/:category" component={Post} />
         <Route exact path="/post/:category/:id" component={Post} /> */}
         {/* <Route exact path="/contact">
         <Contact name="prince" />
         </Route> */}

         {/* <Route exact path="/contact" render ={ () => <Contact name="prince" /> } />

         <Route exact path="/login">
          {isLogged ? <Redirect to="/Dashboard" /> : <Home />}
         </Route>
         
         <Route exact path="/dashboard" component={Dashboard} />

         <Route component={Error} />
         </Switch>
         </BrowserRouter> */}
         
        </div>
    );
  }
}
export default App;
