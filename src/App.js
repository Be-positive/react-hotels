import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Countries from './components/Countries';
import Bitcoin from './components/Bitcoin'


function App() {
  return (
    <div>
      <Navbar />
      
      <Header />

      <Countries/>

      <Bitcoin />      

      
    </div>
  );
}

export default App;
