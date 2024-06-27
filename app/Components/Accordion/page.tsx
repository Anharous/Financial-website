"use client"
import Image from "next/image";
import Data from '../../../data.json'
import './accordion.css'
import Rect, { useState } from "react";

export default function page(){
    const accordions= Data.accordions
    const [currentIndex, setCurrentIndex]=useState<number|null>(null);
    const toggle = (index:number) =>{
        setCurrentIndex(currentIndex === index ? null : index);
    };

    return(
        <div className="accordion-phase">
            <div className="accordion-head">
                <h1>Frequently asked questions.</h1>
                <div className="accordion-head-underline"></div>
            </div>
            <div>
            {
                accordions.map((accordion,index)=>{
                    return(
                        <>
                        <div className="accordion-item-container">
                            <div className={`question ${currentIndex === index ? 'active' : ''}`} onClick={()=> toggle(index)}>
                                <h3>{accordion.question}</h3>
                                <Image src={currentIndex === index ? '/minus-symbol.svg': '/plus-symbol.svg'} alt="symbol" width={32} height={32}/>
                            </div>
                            {currentIndex === index &&(
                                <div className="answer">
                                    <div className="accordion-img">
                                        <Image src={accordion.image} alt="people" width={579} height={273} id="accordian-image"/>
                                    </div>
                                    <div className="accordion-para">
                                    {accordion.answers.map((answer, ansIndex)=>(
                                            <p key={ansIndex}>{answer}</p>
                                    ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        </>
                    )
                })
            }
            </div>

        </div>
    )
}