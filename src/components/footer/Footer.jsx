import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer_socials">
        <a href="https://www.instagram.com/aprilrealty" target="_blank"><FiInstagram/></a><br/>
        <a href="https://www.linkedin.com/in/april-macaraeg-7a555265/" target="_blank"><BsLinkedin/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2023 Produksheenz. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer