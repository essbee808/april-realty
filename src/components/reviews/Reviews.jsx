import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import Review1 from '../../assets/review-1.jpeg'
import Review2 from '../../assets/review-2.jpeg'
import Review3 from '../../assets/review-3.jpeg'

const Reviews = () => {
  return (
    <section id="review-carousel">
      <Carousel>
        <Carousel.Item>
          <Image src={Review1} text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Review3} text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

  </section>
  )
}

export default Reviews;

