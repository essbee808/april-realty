import React from 'react'
import House from '../../assets/house.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Home = () => {
  return (
    <section>
      <Container>
          <Row>
              <img src={House} alt="house keys" />
          </Row>
          <Row>
              <h2>Featured Neighborhoods</h2>
              <small>90404</small>
              <small>90301</small>
          </Row>

          <Row>
              <h2>Featured Listings</h2>
          </Row>
      </Container>
    </section>
  )
}

export default Home