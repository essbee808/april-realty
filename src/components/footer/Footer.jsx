import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
// import './footer.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <footer className="bg-sky-900
    text-1xl text-white text-center
    border-t-4 border-sky-600
    fixed
    inset-x-0
    bottom-0
    p-4">
       © 2023 April Realty. All Rights Reserved.
    </footer>
  //   <footer>
  //     <Container>
  //       <Row>
  //         <Col >
  //           <h4>April Macaraeg, Esq.</h4>
  //           <h6>Grate Real Estate</h6>
  //           <small>Broker Associate/Realtor®</small><br/>
  //           <small>DRE# 02094285</small>
  //         </Col>

  //         <Col>
  //           <a href="mailto:macaraeg.april@gmail.com"><MdOutlineMail />: macaraeg.april@gmail.com</a><br/>
  //           <a href="tel:4242614316"><BsTelephone/>: (424) 261-4316</a>
  //         </Col>
  //         <Col>
  //           <h4>Socials</h4>
  //           <a href="https://www.instagram.com/aprilrealty" target="_blank"><FiInstagram size={40} className="social_icon"/></a>
  //           <a href="https://www.linkedin.com/in/april-macaraeg-7a555265/" target="_blank"><BsLinkedin size={40} className="social_icon"/></a>
  //         </Col>
  //       </Row>
  //     {/* <div className="footer_socials">
  //       <a href="https://www.instagram.com/aprilrealty" target="_blank"><FiInstagram/></a><br/>
  //       <a href="https://www.linkedin.com/in/april-macaraeg-7a555265/" target="_blank"><BsLinkedin/></a>
  // </div>*/}

  //     <div className="footer_copyright">
  //       <small>&copy; 2023 <a href="https://www.sheenabonilla.com/" target="_blank">Produksheenz.</a> All Rights Reserved.</small>
  //     </div>
  //     </Container>
  //   </footer>
  )
}

export default Footer