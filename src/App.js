import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Countries from './components/Countries';
import Bitcoin from './components/Bitcoin'

import About from './components/navbar-components/About'
import Job from './components/navbar-components/Job'
import Rooms from './components/navbar-components/Rooms'
import Error from './components/navbar-components/Error'

import { 
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
          <Header />

          <Countries/>

         <Bitcoin /> 

          </Route>
          <Route path="/about">
            <About />            
          </Route>
          <Route path="/job">
            <Job />            
          </Route>
          <Route path="/rooms">
            <Rooms />            
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        
      </Router>      
      
     

      
    </div>
  );
}

export default App;
