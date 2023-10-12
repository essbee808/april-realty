import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import Review1 from '../../assets/review-1.jpeg'
import Review2 from '../../assets/review-2.jpeg'
import Review3 from '../../assets/review-3.jpeg'

const Reviews = () => {
  return (
    <section id="review-carousel">
      <h1 className="main-heading text-center">Testimonials</h1>
      <Carousel>
        <Carousel.Item>
          <Image src={Review1} text="First Slide"/>
           <Carousel.Caption>
            <h2 className="slide-text">First Slide</h2>
            <p>April is the gold standard in Real Estate. We came to April about 2 months into the buying process. 
              The minute we started looking for a house with April, everything fell into place. What sets April 
              apart from ordinary realtors is April's impeccable business acumen and her effortless ability to cultivate 
              relationships with agents, sellers, neighbors, mortgage lenders, and people alike. She is a student 
              of the industry and her willingness to advocate for her clients knows no bounds. On top of that, 
              she's also an attorney - her legal skills were instrumental when a seller refused to sign a cancelation! 
              Overall, April (as well as her team) instills confidence and trust, making our home buying journey stress 
              free. We highly highly recommend April.</p>
            <p>N.L.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Review3} text="Second slide" />
          <Carousel.Caption>
            <h2 className="slide-text">Second Slide</h2>
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

