import React from 'react'
import Service from './components/services/Service'

import { useEffect } from 'react';
import AOS from 'aos';
import Footer from './components/add/Footer';




const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <>
    {/* <Demo1/> */}
    <Service/>
    <Footer/>
    </>
  )
}

export default App
