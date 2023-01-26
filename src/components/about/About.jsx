import React from 'react'
import './about.css'
import Profile from '../../assets/profile.jpg'
import Image from 'react-bootstrap/Image'
import Contact from '../contact/Contact'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
  return (
    <div className="main">
    <Container>
      <Row className="p-3">
        <Col sm={4}><Image src={Profile} alt="Profile photo" roundedCircle className="p-1"/></Col>
        <Col sm={4} className="p-1">
          <h3>April Macaraeg, Esq.</h3>
          <br/>
          <h6>Grate Real Estate</h6>
          
          <p>Broker Associate/Realtor®</p>
          <p>DRE# 02094285</p>
        </Col>
        <Col sm={4} className="p-1">
          <h3>Contact</h3>
          <br/>
          <a href="tel:424261-4316">(424) 261-4316</a><br/>
          <a href="mailto:macaraeg.april@gmail.com subject=Real Estate Inquiry">macaraeg.april@gmail.com</a>
        </Col>
      </Row>

      <Row className="p-3">
        <Col sm className="p-2">
          <p>
                I became a real estate agent because I want to help people make informed decisions regarding
                their property--whether it's buying or selling. My purpose in life has always been to serve
                others. As an attorney, I help clients navigate through the legal system. As an adjunct professor,
                I help students prepare for the "real world." Regardless of what hat I'm wearing, the most important
                thing to me is helping others succeed and reach their goals. I strive to provide the best service
                so that you can have the best experience.
           </p>
        </Col>
        <Col sm className="p-2">
          <Contact />
        </Col>
      </Row>
    </Container>
    </div>
    /*
      <Container>
          <div className="info main">
            <Row>
              <Col><Image src={Profile} alt="Profile photo" roundedCircle/></Col>
              <Col>
                  <h3>April Macaraeg, Esq.</h3>
                  <h6>Grate Real Estate</h6>
                  <p>Broker Associate/Realtor®</p>
                  <p>DRE# 02094285</p>
                  <br/>
                  <p>324 S. Beverly Dr. Suite 490</p><br/>
                  <p>Beverly Hills, CA 90212</p>
              </Col>
              <Col className="contact_link">
                <h5>Contact</h5><br/>
                <small><a href="tel:424261-4316">D: (424) 261-4316</a></small><br/>
                <a href="mailto:macaraeg.april@gmail.com subject=Real Estate Inquiry">E: macaraeg.april@gmail.com</a>
              </Col>
            </Row>
          </div>
          
          <div className="description">
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
              <Col>
                <Contact />
              </Col>
            </Row>
          </div>
        {/* <h5>Specialties: Buyer's agent, Listing agent, Relocation, Legal, Landlord</h5>

          <div>
            <a href="https://www.zillow.com/profile/macaraeg%20april" target="_blank"><SiZillow /> Read My Zillow Reviews</a>
          </div> 
      </Container>*/
  )
}

export default About