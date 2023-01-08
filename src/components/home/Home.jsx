import React from 'react'
import House from '../../assets/house.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Home = () => {
  return (
    <Container>
        <Row>
            <h1>Home</h1>
        </Row>
        <Row>
            <img src={House} alt="house keys" />
        </Row>
    </Container>
  )
}

export default Home