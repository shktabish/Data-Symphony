import { useRef, useState } from 'react'
import './faqAccordian.css'
import { IoIosArrowUp } from "react-icons/io"

const FaqAccordian = ({ ques, ans }) => {
    const ansRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-accordian">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} 
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="ques">{ques}</div>
            <IoIosArrowUp 
                className={`icon ${(isOpen)? "open" : ""}`}
            />
        </div>
        <div 
            className="ans" ref={ansRef}
            style={{maxHeight: (isOpen)? `${ansRef.current.scrollHeight}px` : "0"}}>
            {ans}
        </div>
    </div>
  )
}

export default FaqAccordian