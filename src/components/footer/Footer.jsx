import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
// import './footer.css'

const Footer = () => {
  return (
    <footer className="bg-slate-50
    text-1xl text-black text-center
    fixed
    inset-x-0
    bottom-0
    pt-1">
      <div className="footer-menu">
        <span><a href="https://www.google.com" target="_blank">Google </a></span>
        <span><a href="https://www.google.com" target="_blank">Google</a> </span>
      </div>
       <small>© 2023 April Realty. All Rights Reserved.</small>
    </footer>
  )
}

export default Footer