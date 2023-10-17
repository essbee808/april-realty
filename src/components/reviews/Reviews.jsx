import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

// import Review1 from '../../assets/review-1.jpeg'
// import Review2 from '../../assets/review-2.jpeg'
// import Review3 from '../../assets/review-3.jpeg'
import './reviews.css'
import BG from '../../assets/black-bg.jpeg'

const Reviews = () => {
  return (
    <div id="review-carousel">
      <h1 className="main-heading text-center">Testimonials</h1>
      <Carousel>
        <Carousel.Item>
         <Image src={BG} text="First Slide"></Image>
         <Carousel.Caption>
            {/* <h2 className="slide-text">First Slide</h2> */}
            <p>"Having someone like her in your corner during such a life changing process is priceless." 
              </p>
            <p>- K.B.</p>
          </Carousel.Caption>
        </Carousel.Item>  

        <Carousel.Item>
         <Image src={BG} text="Second Slide"></Image>
         <Carousel.Caption>
            {/* <h2 className="slide-text">First Slide</h2> */}
            <p>"April is very knowledgeable, communicative and understanding as we got cold feet a couple of 
              times during the process. She made sure we understood all the paperwork and that we were on-time to meet 
              the deadlines."</p>
            <p>- L.</p>
          </Carousel.Caption>
        </Carousel.Item>  

        <Carousel.Item>
         <Image src={BG} text="Third Slide"></Image>
         <Carousel.Caption>
            {/* <h2 className="slide-text">First Slide</h2> */}
            <p>"What sets April  apart from ordinary realtors is April's impeccable business acumen and her effortless ability to cultivate 
              relationships with agents, sellers, neighbors, mortgage lenders, and people alike."</p>
            <p>- N.L.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
         <Image src={BG} text="Fourth Slide"></Image>
         <Carousel.Caption>
            {/* <h2 className="slide-text">First Slide</h2> */}
            <p>"She's fast and quick to respond. Friendly, knowledgeable and professional. Highly recommend April!"</p>
            <p>- L.M.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
         <Image src={BG} text="Fifth Slide"></Image>
         <Carousel.Caption>
            {/* <h2 className="slide-text">First Slide</h2> */}
            <p>"April wasn’t only great with me, she was amazing and great to everyone we came in contact with, making the experience 
              so pleasant and positive."</p>
            <p>- C.P.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
         <Image src={BG} text="Sixth Slide"></Image>
         <Carousel.Caption>
            {/* <h2 className="slide-text">First Slide</h2> */}
            <p>"April was absolutely amazing. She wasn’t just our realtor, she quickly became our friend."</p>
            <p>- M.H.</p>
          </Carousel.Caption>
        </Carousel.Item>

      
    </Carousel>
  </div>
  )
}

export default Reviews;

