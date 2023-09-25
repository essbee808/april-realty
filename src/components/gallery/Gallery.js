import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Review1 from '../../assets/review-1.jpeg'
import Review2 from '../../assets/review-2.jpeg'
import Review3 from '../../assets/review-3.jpeg'

const Gallery = () => {
  return (
    <Container>
        <Row className="justify-content-md-center">
            <Col sm>
              <a href="https://www.google.com" target="_blank"><Image src={Review1}/></a>
              
            </Col>

            <Col sm>
                <Image src={Review2}/>
            </Col>

            <Col sm>
                <Image src={Review3}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Gallery;