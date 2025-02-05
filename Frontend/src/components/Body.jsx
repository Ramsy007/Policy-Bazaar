import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
  <Navbar />
  
  <div className="flex-grow flex items-center justify-center m-4 p-6">
     <Outlet/>
  </div>

  <Footer />
</div>

  );
}

export default Body;
