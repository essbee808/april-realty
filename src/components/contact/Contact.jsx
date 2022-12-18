import React from 'react'

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
            <a href="mailto:macaraeg.april@gmail.com" target="_blank">Send an email</a>
          </article>
          <article className="contact_option">
            <h4>Phone</h4>
            <a href="tel:4242614316" target="_blank">Phone</a>
          </article>
          <article className="contact_option">
            <h4>Instagram</h4>
            <a href="https://www.instagram.com/aprilrealty/" target="_blank">Follow me on Instagram</a>
          </article>
          
        </div>
    </section>
  )
}

export default Contact