import React from 'react'
import './tabLayout.css'
import tab from '/images/tab.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TabLayout = () => {

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from('.tab', {
            rotateX: "30deg",
            y: -180,
            scrollTrigger: {
                trigger: ".tabCon",
                start: "top 50%",
                end: "top top",
                scrub: true
            }
        })
    })

  return (
    <div className="tabCon">
            <p>Data at your</p>
            <h2>Fingertips</h2>
            <img className='tab' src={tab} alt="tablet" />
        {/* <div className="per-tab">
            <img className='tab' src={tab} alt="tablet" />
        </div> */}
    </div>
  )
}

export default TabLayout