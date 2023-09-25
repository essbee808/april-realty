import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
// import './footer.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <footer className="bg-slate-50
    text-1xl text-black text-center
    fixed
    inset-x-0
    bottom-0
    pt-1">
       <small>© 2023 April Realty. All Rights Reserved.</small>
    </footer>

  )
}

export default Footer