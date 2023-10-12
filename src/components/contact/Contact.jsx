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

import './contact.css';



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
              <h1 className="main-heading text-center">Contact</h1>
              <section className="contact-info">
                <h4 className="fs-4">April Macaraeg, Esq.</h4>
                  <h6 className="fs-6">Broker Associate/Realtor®</h6>
            
                    <h6>Phone: <a href="tel:4242614316">424-261-4316</a></h6>
                    <br />
                    <h6>324 S. Beverly Drive, Suite 490</h6>
                    <h6>Beverly Hills, CA 90212</h6>
              </section>
              <section className="get-in-touch">
                <h2>Get in Touch</h2>
                <p>Whether you're selling, buying, or both, you can count on us as the local expers in the market
                and the real estate team that always puts clients first.
                </p>
                <p>We're ready to talk whenever you are.</p>
                <p>Please complete the form below.</p>
              </section>
             
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
                  <Form.Control as="textarea" name="message" rows={6} placeholder="I have question for you..." required/>
                </Form.Group>
                <Button type="submit" className="primary_button">Send Message</Button>
              </Form>
            </Col>
          </Row>
    </Container>
  )
}

export default Contact