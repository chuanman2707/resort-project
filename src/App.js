import React from 'react';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </> 
  );
}

console.log(process.env.ACCESS_SPACE)
export default App;
