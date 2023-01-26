import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Reviews from './reviews/Reviews';

const Router = () => {
  return (
   <Routes>
      {/* <Route exact path="/" element={<Home/>}/> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/contact" element={<Contact/>}/>
   </Routes>
  )
}

export default Router