import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hrq0qin', 'template_9q19nmr', form.current, '-Fyq1bupIBAfjxLqM');
    
    e.target.reset();
  }

  return (
      <Container>
          <Row>
            <Col>
              <h3><strong>Get in Touch</strong></h3>
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="Form.ControlInput1">
                  <Form.Control type="text" name="first_name" placeholder="First Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Form.ControlInput2">
                  <Form.Control type="text" name="last_name" placeholder="Last Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Form.ControlInput3">
                  <Form.Control type="email" name="email" placeholder="Email Address" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                  <Form.Control as="textarea" name="message" rows={4} placeholder="I have question for you..." required/>
                </Form.Group>
                <Button type="submit" className="primary_button">Send Message</Button>
              </Form>
            
            </Col>
          </Row>
    </Container>
  )
}

export default Contact