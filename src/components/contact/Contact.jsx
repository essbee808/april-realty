import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import Profile from '../../assets/profile.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Contact = () => {
  return (
    <Container >
        <h2>Contact Me</h2>
        <Row>
          <Col>324 S. Beverly Dr. Suite 490
               Beverly Hills, CA 90212
          </Col>
          <Col><img src={Profile} alt="Profile Image"/></Col>
        </Row>
        <div className="contact_options">
          <article className="contact_option">
            <h4>Email</h4>
            <MdOutlineEmail />
            <a href="mailto:amacarae@gmail.com" target="_blank"> Send an email</a>
          </article>
          <article className="contact_option">
            <h4>Phone</h4>
            <BsTelephone/> 
            <a href="tel:4242614316" target="_blank"> Phone</a>
          </article>
          <article className="contact_option">
            <h4>Instagram</h4>
            <AiOutlineInstagram />
            <a href="https://www.instagram.com/aprilrealty/" target="_blank">Instagram</a>
          </article>
        </div>

        <form action="">
          <input type="text" placeholder="Name"/><br/>
          <input type="tel" placeholder="Phone"/><br/>
          <input type="text" placeholder="Enter message"/><br/>
          <input type="submit" value="Submit" />
        </form>
   </Container>
  )
}

export default Contact