"use client"
import './terms.css'
import Header from '../Header/page'
import Footer from '../Footer/page'
import Link from "next/link"
import Data from "../../../data.json"
import { useRouter } from "next/navigation"

export default function page(){
    const terms = Data.terms
    const router = useRouter();

    const back = () =>{
        router.push("../");
    }

    return(
        <>
        <Header/>
        <div className="terms">
            <div className="terms-head">
                 <p> <button onClick={back} >Home</button> &#62; Terms & Conditions</p>
                 <h1>Terms & Conditions</h1>
            </div>
            <div className='main-container'>
            {
                terms.map((term,index)=>{
                    return(
                        <div key={index} className="terms-items">
                            <div className="item-container">
                                <h3>{term.name}</h3>
                                <p>{term.description}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>   
        <Footer/> 
        </>
       
    )
}