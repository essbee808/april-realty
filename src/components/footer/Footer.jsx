import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer_socials">
        <a href="https://www.instagram.com/aprilrealty" target="_blank"><FiInstagram/></a><br/>
        <a href="https://www.zillow.com/profile/macaraeg%20april" target="_blank">Zillow</a>
      </div>

      <div className="footer_copyright">
        <small>&copy; 2023 Produksheenz. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer