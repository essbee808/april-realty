import React from 'react'
import {Routes, Route} from 'react-router-dom';
import About from './about/About';

const Router = () => {
  return (
   <Routes>
      <Route exact path='/' element={<About/>}/>
   </Routes>
  )
}

export default Router