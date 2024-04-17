import FaqAccordian from '../Components/FaqAccordian'
import './faq.css'
import { faqData } from '../Constants/data'

const FAQ = () => {
    const faqAcc = faqData.map((item) => {
        return <FaqAccordian key={item.id} ques={item.ques} ans={item.ans} />
    })

  return (
    <div className="faq-con">
        <h2>FAQ</h2>
        <div className="acc-con">
            {faqAcc}
        </div>
    </div>
  )
}

export default FAQ