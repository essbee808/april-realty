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
         <Image src={BG} text="Second Slide"></Image>
         <Carousel.Caption>
            {/* <h2 className="slide-text">First Slide</h2> */}
            <p>April is hands down the best realtor! She went above and beyond! We would not have gotten the house we 
              wanted had it not been for her. She will make you feel heard and understood while at the same time 
              offering her expertise and guidance. April uses her knowledge of real estate and negotiation skills 
              as a lawyer to fiercely advocate for her clients. Above all, she is genuinely a good person. She will 
              treat you more like family than a client, and you will see very early on, she has your best interest 
              at heart. Having someone like her in your corner during such a life changing process is priceless. 
              Thank you, April!</p>
            <p>- K.B.</p>
          </Carousel.Caption>
        </Carousel.Item>  

        <Carousel.Item>
         <Image src={BG} text="Second Slide"></Image>
         <Carousel.Caption>
            {/* <h2 className="slide-text">First Slide</h2> */}
            <p>We are so glad to have April as our agent for the purchase of our home. She made the process a lot less 
              stressful. She is very knowledgeable, communicative and understanding as we got cold feet a couple of 
              times during the process. She made sure we understood all the paperwork and that we were on-time to meet 
              the deadlines. She was supportive and provided us all the information we need to make a decision confidently 
              and independently.</p>
            <p>We definitely recommend April’s services to anyone looking to buy or sell!</p>
            <p>- L.</p>
          </Carousel.Caption>
        </Carousel.Item>  

        <Carousel.Item>
         <Image src={BG} text="First Slide"></Image>
         <Carousel.Caption>
            {/* <h2 className="slide-text">First Slide</h2> */}
            <p>April is the gold standard in Real Estate. We came to April about 2 months into the buying process. 
              The minute we started looking for a house with April, everything fell into place. What sets April 
              apart from ordinary realtors is April's impeccable business acumen and her effortless ability to cultivate 
              relationships with agents, sellers, neighbors, mortgage lenders, and people alike. On top of that, 
              she's also an attorney - her legal skills were instrumental when a seller refused to sign a cancelation! 
              We highly highly recommend April.</p>
            <p>- N.L.</p>
          </Carousel.Caption>
        </Carousel.Item>

        
        {/* <Carousel.Item>
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
        </Carousel.Item> */}
    </Carousel>
  </div>
  )
}

export default Reviews;

