import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import './aboutUs.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import SplitType from 'split-type'
import { useEffect } from 'react'

const AboutUs = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: 'chars, words' });

      gsap.to(text.chars, {
        color: "#ffffff",
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.about-text span',
          start: "top 75%",
          end: "top 25%",
          scrub: true
        }
      })
    }
  }, []);

  return (
    <div className="about-con">
        <div className="about-text">
            <span ref={textRef}>Say goodbye to fragmented information and wasted time. Access all data, notes, and resources in one centralized platform. Break free from manual data entry and scattered information with Data Symphony.</span>
        </div>
    </div>
  )
}

export default AboutUs