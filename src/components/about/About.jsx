import React from 'react'
import {SiZillow} from 'react-icons/si'
import Profile from '../../assets/profile.jpg'
import Image from 'react-bootstrap/Image'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
  return (
    <Container>
        <h1>About Me</h1>
        <Row>
          <Col>
              <h5>April Macaraeg, Esq.</h5>
              <h6>Grate Real Estate</h6>
              <h7>Broker Associate/Realtor®</h7>
              <h7>DRE# 02094285</h7>
          </Col>
          <Col><Image src={Profile} alt="Profile photo" roundedCircle/></Col>
        </Row>
        <Row>
          <Col>
            <p>
            I became a real estate agent because I want to help people make informed decisions regarding
            their property--whether it's buying or selling. My purpose in life has always been to serve
            others. As an attorney, I help clients navigate through the legal system. As an adjunct professor,
            I help students prepare for the "real world." Regardless of what hat I'm wearing, the most important
            thing to me is helping others succeed and reach their goals. I strive to provide the best service
            so that you can have the best experience.
            </p>
          </Col>
        </Row>
      {/* <h5>Specialties: Buyer's agent, Listing agent, Relocation, Legal, Landlord</h5>

        <div>
          <a href="https://www.zillow.com/profile/macaraeg%20april" target="_blank"><SiZillow /> Read My Zillow Reviews</a>
        </div> */}
       
    </Container>
  )
}

export default About