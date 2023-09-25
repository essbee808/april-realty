import React from 'react'
// import House from '../../assets/house.jpg'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Profile from '../../assets/profile.jpg'
// import Image from 'react-bootstrap/Image'

import About from '../about/About'
import Contact from '../contact/Contact'
import Gallery from '../gallery/Gallery'
import Reviews from '../reviews/Reviews'

const Home = () => {
  return (
      <div>
        <About />
        {/* <Gallery /> */}
        <Reviews />
        <Contact />
      </div>
      
  )
}

export default Home