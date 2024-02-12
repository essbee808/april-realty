import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {SiZillow} from 'react-icons/si'
import {MdOutlineMail} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer className="bg-slate-50
    text-1xl text-black text-center
    fixed
    inset-x-0
    bottom-0
    pt-1">
      <div id="footer-menu">
        <h2>Let's Connect!</h2>
        <ul>
          <li className="social-icon">
            <p><a href="https://www.instagram.com/aprilrealty/" target="_blank">
            <BsInstagram icon={BsInstagram} size="2em"/></a>
            </p>
          </li>
          <li className="social-icon">
            <p><a href="https://www.zillow.com/profile/macaraeg%20april" target="_blank">
            <SiZillow icon={SiZillow} size="2em"/></a>
            </p>
          </li>
        </ul>
      </div>
       <p>© 2024 April Realty. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer