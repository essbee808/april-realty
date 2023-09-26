import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Profile from '../../assets/profile.jpg'
import Image from 'react-bootstrap/Image'

const Welcome = () => {
  return (
    <Container fluid>
        <h2 className="tagline text-center"><i>Experience A Grate Transaction!</i></h2>

          <Row className="row-test">
              <Col sm={8} className="info">
                
                <div className="fs-6 fw-light">
                  <p className="text-center">
                    Everything I do is tailored to helping my client succeed. Being an attorney
                    helps with worst case scenario. Being a teacher helps with best case scenario.
                    These two combined help make me a well rounded realtor for you.
                  </p><br/>
                  <p className="text-center">The most important thing to me is that your goals are met. That's why my motto
                    is: Even if you don't choose me, use me.
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <Image src={Profile} alt="Profile photo" roundedCircle className="p-4"/>
                <h3 className="fs-3 text-center">April Macaraeg, Esq.</h3>
                <h6 className="fs-5 text-center">Grate Real Estate</h6>
                  <p className="text-center">Broker Associate/Realtor®</p>
                  <p className="text-center">DRE# 02094285</p>
              </Col>
          </Row>
          {/* <Row>
            <div className="aspect-w-16 aspect-h-9">
                  <iframe src="https://player.vimeo.com/video/864134934?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Grate Real Estate Promo Video"></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </Row> */}
      </Container>
  )
}

export default Welcome