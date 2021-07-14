import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'
import Countries from './components/Countries';


function App() {
  return (
    <div>
      <Navbar />
      
      <Main />

      <Countries/>
      

      
    </div>
  );
}

export default App;
