import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
import './footer.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col >
            <h5>April Macaraeg, Esq.</h5>
            <h6>Grate Real Estate</h6>
            <h7>Broker Associate/Realtor®</h7>
            <h7>DRE# 02094285</h7>
          </Col>
          <Col>
            <a href="mailto:macaraeg.april@gmail.com"><MdOutlineMail />: macaraeg.april@gmail.com</a><br/>
            <a href="tel:4242614316"><BsTelephone/>: (424) 261-4316</a>
          </Col>
          <Col>Col 3</Col>
        </Row>

      {/* <div className="footer_socials">
        <a href="https://www.instagram.com/aprilrealty" target="_blank"><FiInstagram/></a><br/>
        <a href="https://www.linkedin.com/in/april-macaraeg-7a555265/" target="_blank"><BsLinkedin/></a>
  </div>*/}

      <div className="footer_copyright">
        <small>&copy; 2023 Produksheenz. All Rights Reserved.</small>
      </div>
      </Container>
    </footer>
  )
}

export default Footer