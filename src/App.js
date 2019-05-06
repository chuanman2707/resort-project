import React from 'react';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
function App() {
  return (
    <>
    <Route path="/" component={Home} />
    <Route path="/Rooms/" component={Rooms} />
    <Route path="/Singleroom/" component={SingleRoom} />
    </>
  );
}

export default App;
