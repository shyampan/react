import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { Home } from './Compnonets/Home';
import { Service } from './Compnonets/Service';
import { Contact } from './Compnonets/Contact';
import { About } from './Compnonets/About';
import { Navbar } from './Compnonets/Navbar';


function App() {
  return (
  <>
    <Navbar></Navbar>
    <Routes>
      <Route exact path='/' Component={Home} />
      <Route exact path='/service' Component={Service} />
      <Route exact path='/contact' Component={Contact} />
      <Route exact path='/about' Component={About} />
    </Routes>

    </>
  );
}

export default App;
