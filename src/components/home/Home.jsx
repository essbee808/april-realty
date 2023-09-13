import React from 'react'
// import House from '../../assets/house.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Home = () => {
  return (
    <section>
      <Container>
          <Row>
              {/* <div className="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/6puBdEOW7Dg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div> */}

              <div className="aspect-w-16 aspect-h-9">
                <iframe src="https://player.vimeo.com/video/864134934?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" title="Grate Real Estate Promo Video"></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
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