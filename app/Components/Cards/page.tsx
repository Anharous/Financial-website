import Image from "next/image";
import './cards.css'
import Data from '../../../data.json'

export default function page(){
    const cards= Data.cards

    return(
        <div className="cards-containter">
            <div className="cards-head">
                <h1>Completing your financial blueprint</h1>
                <div className="cards-line"></div>
            </div>
            <div className="cards-item-container">
            {
                cards.map((card,index)=>{
                    return(
                        <div key={index} className="cards-item">
                            <Image src={card.image} alt="file" width={64} height={64}/>
                            <p>{card.name}</p>
                            <h4>{card.title}</h4>
                            <div className="cards-item-line"></div>
                            <div className="cards-para">
                                <p>{card.description}</p>
                            </div>
                            <h5>Read More</h5>
                        </div>
                    )
                })
            }

            </div>
        </div>
    )

}