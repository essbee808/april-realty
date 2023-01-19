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
    <section>
      <Container>
          <h1>About Me</h1>
          <div className="info main">
            <Row>
              <Col><Image src={Profile} alt="Profile photo" roundedCircle/></Col>
              <Col>
                  <h5>April Macaraeg, Esq.</h5>
                  <h6>Grate Real Estate</h6>
                  <h7>Broker Associate/Realtor®</h7><br/>
                  <h7>DRE# 02094285</h7><br/>
                  <br/>
                  <h7>324 S. Beverly Dr. Suite 490</h7><br/>
                  <h7>Beverly Hills, CA 90212</h7>
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
          </div> */}
      </Container>
    </section>
  )
}

export default About