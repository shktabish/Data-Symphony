import './why.css'
import Card from '../Components/Card'
import { cardsData } from '../Constants/data'

const Why = () => {
    const cards = cardsData.map((item) => {
        return <Card key={item.id} title={item.title} desc={item.desc} imgPath={item.imagePath}/>
    })

  return (
    <div className="why-con">
        <h2 className="why-header">Why DATA SYMPHONY</h2>
        <div className="cards-con">
            {cards}
        </div>
    </div>
  )
}

export default Why