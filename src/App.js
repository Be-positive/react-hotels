import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Countries from './components/Countries';
import Bitcoin from './components/Bitcoin'
import Footer from './components/Footer'

//Navabar buttens
import About from './components/navbar-components/About'
import Job from './components/navbar-components/Job'
import Hotels from './components/navbar-components/Hotels'
import Error from './components/navbar-components/Error'

//fixed Cookie
import Cookie from './components/Cookie/Cookie'; 

// new, using the same in v6 version of react-router-dom
import {
  BrowserRouter,
  Routes,
  Route,  
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Cookie/>
        <Routes>          
          <Route path="/" element={<><Header /><Countries /><Bitcoin /><Footer/></>}></Route>

          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/job" element={<Job />}>
          </Route>
          <Route path="/hotels" element={<Hotels />}>
          </Route>
          <Route path="*" element={<Error />}>
          </Route>
        </Routes>                
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
