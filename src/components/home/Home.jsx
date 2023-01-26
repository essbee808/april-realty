import React from 'react'
// import House from '../../assets/house.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Home = () => {
  return (
    <section>
      <Container>
          <Row>
              <div className="aspect-w-14 aspect-h-7">
                <iframe src="https://www.youtube.com/embed/6puBdEOW7Dg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </Row>
          <Row>
              <h2>Featured Neighborhoods</h2>
              <h5 className="coming_soon">Coming Soon!</h5>
          </Row>

          <Row>
              <h2>Featured Listings</h2>
              <h5 className="coming_soon">Coming Soon!</h5>
          </Row>
      </Container>
    </section>
  )
}

export default Home