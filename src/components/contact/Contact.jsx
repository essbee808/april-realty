import React from 'react'
import {BsTelephone} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id="contact">
        <h2>Contact Me</h2>
        <div>
          <p>324 S. Beverly Dr. Suite 490 <br/>
               Beverly Hills, CA 90212
          </p>
        </div>
        <div className="contact_options">
          <article className="contact_option">
            <h4>Email</h4>
            <MdOutlineEmail />
            <a href="mailto:macaraeg.april@gmail.com" target="_blank"> Send an email</a>
          </article>
          <article className="contact_option">
            <h4>Phone</h4>
            <BsTelephone/> 
            <a href="tel:4242614316" target="_blank"> Phone</a>
          </article>
          <article className="contact_option">
            <h4>Instagram</h4>
            <AiOutlineInstagram />
            <a href="https://www.instagram.com/aprilrealty/" target="_blank">Instagram</a>
          </article>
          
        </div>
    </section>
  )
}

export default Contact