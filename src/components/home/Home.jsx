import React from 'react'
// import House from '../../assets/house.jpg'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Profile from '../../assets/profile.jpg'
// import Image from 'react-bootstrap/Image'

import Welcome from '../welcome/Welcome'
import Contact from '../contact/Contact'
import Reviews from '../reviews/Reviews'

const Home = () => {
  return (
      <div>
        <Welcome />
        {/* <Gallery /> */}
        <Reviews />
        {/* <Social /> */}
      </div>
      
  )
}

export default Home