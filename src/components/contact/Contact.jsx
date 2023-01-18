import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import Profile from '../../assets/profile.jpg'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hrq0qin', 'template_9q19nmr', form.current, '-Fyq1bupIBAfjxLqM');
    // emailjs.sendForm(serviceID, templateID, templateParams, -Fyq1bupIBAfjxLqM);
    e.target.reset();
  }

  return (
    <Container >
        <Row>
          <Col>
            <h3>Get in Touch</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="first_name" placeholder="First Name" required/><br/>
              <input type="text" name="last_name" placeholder="Last Name" required/><br/>
              <input type="text" name="email" placeholder="Email" required/><br/>
              <textarea rows="7" name="message" placeholder="I have a question for you..." required/><br/>
              <button type="submit">Send Message</button>
            </form>
          </Col>
        </Row>
   </Container>
  )
}

export default Contact