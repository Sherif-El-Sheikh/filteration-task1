import React from 'react'
import Home from './../Home/Home';
import AboutUs from './../AboutUs/AboutUs';
import Services from '../Services/Services';
import Testymonials from '../Testymonials/Testymonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


export default function MasterLayout() {
  return (
    <div>
      <Home/>
      <AboutUs/>
      <Services/>
      <Testymonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}
