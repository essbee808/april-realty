import React from 'react'
import './about.css'
import Profile from '../../assets/profile.jpg'
import Image from 'react-bootstrap/Image'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
  return (

    <Container fluid>
        <h1 className="main-heading text-center">About</h1>
          <Row className="row-test">
              <Col sm={8} className="info">
                
                <div className="fs-6 fw-light bio">
                  <p className="text-center">
                    I became a real estate agent because I want to help people make informed decisions regarding
                    their property--whether it's buying or selling. My purpose in life has always been to serve
                    others. As an attorney, I help clients navigate through the legal system. As an adjunct professor,
                    I help students prepare for the "real world." Regardless of what hat I'm wearing, the most important
                    thing to me is helping others succeed and reach their goals. I strive to provide the best service
                    so that you can have the best experience.
                  </p>
                </div>
              </Col>
              <Col sm={4} className="bio">
                <Image src={Profile} alt="Profile photo" roundedCircle className="p-3"/>
                <h3 className="fs-3 text-center">April Macaraeg, Esq.</h3>
                <h6 className="fs-5 text-center">Grate Real Estate</h6>
                  <p className="text-center">Broker Associate/Realtor®</p>
                  <p className="text-center">DRE# 02094285</p>
              </Col>
          </Row>
          <Row>
            <div className="aspect-w-16 aspect-h-9">
                  <iframe src="https://player.vimeo.com/video/864134934?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Grate Real Estate Promo Video"></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Row>
      </Container>




    // <div className="main">
    // <Container>
    //   <Row className="p-3">
    //     <Col sm={4}><Image src={Profile} alt="Profile photo" roundedCircle className="p-1"/></Col>
    //     <Col sm={4} className="p-1">
    //         <h3 className="fs-5">April Macaraeg, Esq.</h3>
    //         <div className="fs-6 fw-light">
    //           <h6>Grate Real Estate</h6>
    //           <p>Broker Associate/Realtor®</p>
    //           <p>DRE# 02094285</p>
    //         </div>
            
    //     </Col>
    //     <Col sm={4} className="p-1">
    //       <h3 className="fs-3 fw-light">Contact</h3>
    //       <a href="tel:424261-4316">(424) 261-4316</a><br/>
    //       <a href="mailto:macaraeg.april@gmail.com subject=Real Estate Inquiry">macaraeg.april@gmail.com</a>
    //     </Col>
    //   </Row>

    //   <Row className="p-3">
    //     <Col sm className="p-2">
    //       <p className="info">
    //             I became a real estate agent because I want to help people make informed decisions regarding
    //             their property--whether it's buying or selling. My purpose in life has always been to serve
    //             others. As an attorney, I help clients navigate through the legal system. As an adjunct professor,
    //             I help students prepare for the "real world." Regardless of what hat I'm wearing, the most important
    //             thing to me is helping others succeed and reach their goals. I strive to provide the best service
    //             so that you can have the best experience.
    //        </p>
    //     </Col>
    //     <Col sm className="p-2">
    //       <Contact />
    //     </Col>
    //   </Row>
    // </Container>
    // </div>
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

export default About;