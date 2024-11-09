import React from 'react';
import Navbar from './Navbar'; // Import Navbar
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Navbar /> 
 
    </div>
  );
}

export default Home;
