import React from 'react'
import Image from 'next/image'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsYoutube} from 'react-icons/bs'

import logo from '../assets/images/logo.png'
import banner from '../assets/images/banner.gif'

function Header() {
  return (
    <>
      <section className="top-header-section">
        <div className="container">
          <div className="top-header-wrap">
            <div className="top-header-item">
              <p>দৈনিক আজাদী - সোমবার ১৩ নভেম্বর ২০২৩</p>
            </div>
            <div className="top-header-item top-header-right">
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
              <BsYoutube />
            </div>
          </div>
        </div>
      </section>
      <header className='header'>
          <div className="container">
            <div className="header-wrap">
              <Image className='header-logo' width={120} height={100} src={logo} alt='header logo' />
              <Image 
                width={1000} 
                height={100} 
                src={banner} 
                layout="responsive" 
                alt='banner ads' 
                style={{ borderRadius: '5px' }} 
              />
            </div>
          </div>
        </header>
    </>
  )
}

export default Header