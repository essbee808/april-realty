import React from 'react'
import {Routes, Route} from 'react-router-dom';
import About from './about/About';
import Contact from './contact/Contact';

const Router = () => {
  return (
   <Routes>
      {/* <Route exact path="/" element={<Home/>}/> */}
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
   </Routes>
  )
}

export default Router