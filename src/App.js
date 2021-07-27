import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Countries from './components/Countries';
import Bitcoin from './components/Bitcoin'
import Footer from './components/Footer'

import About from './components/navbar-components/About'
import Job from './components/navbar-components/Job'
import Hotels from './components/navbar-components/Hotels'
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

          <Footer /> 

          </Route>
          <Route path="/about">
            <About />            
          </Route>
          <Route path="/job">
            <Job />            
          </Route>
          <Route path="/hotels">
            <Hotels />            
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
