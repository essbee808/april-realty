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
        <Row>
          <Col>
            <h3>Get in Touch</h3>
            <form action="">
              <input type="text" placeholder="Your Name" /><br/>
              <input type="textarea" placeholder="I have a question for you..."/><br/>
              <input type="submit" value="Send"/>
            </form>
          </Col>
        </Row>
   </Container>
  )
}

export default Contact