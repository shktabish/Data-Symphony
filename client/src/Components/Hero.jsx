import React from 'react'
import './hero.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(['.logo', '.signupBtn', '.loginBtn'], {
      y: -100,
      duration:1,
      stagger:0.2,
      opacity: 0,
      ease: 'sine.out'
    }).from('.tagline div', {
      y: 50,
      duration: 0.75,
      stagger: 0.25,
      opacity: 0,
      ease: 'elastic.out'
    })
  })

  return (
    <div className="heroCon">
        <div className="nav">
            <div className="logo">Data Symphony</div>
            <div className="signupBtn">Sign Up</div>
            <div className="loginBtn"><Link to={"/login"}>Login</Link></div>
        </div>
        <div className="tagline">
            <div>DITCH THE DATA CHAOS</div>
            <div>FIND WHAT YOU NEED</div> 
            <div className='pill'>FASTER</div>
        </div>
        <div className="carousel-con">
          <div className='carousel'>
            <span>Syllabus, exams, notes, progress - all in one glance. Find what you need, instantly. Syllabus, exams, notes, progress - all in one glance. Find what you need, instantly.</span>
            <span> Syllabus, exams, notes, progress - all in one glance. Find what you need, instantly. Syllabus, exams, notes, progress - all in one glance. Find what you need, instantly.</span>
          </div>
        </div>
    </div>
  )
}

export default Hero