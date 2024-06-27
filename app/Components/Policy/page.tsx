"use client"
import './policy.css'
import Header from '../Header/page'
import Footer from '../Footer/page'
import Link from "next/link"
import Data from "../../../data.json"
import { useRouter } from "next/navigation"

export default function page(){
    const policies = Data.policies
    const router = useRouter();

    const back = () =>{
        router.push("../");
    }

    return(
        <>
        <Header/>
        <div className="policy">
            <div className="policy-head">
                 <p> <button onClick={back} >Home</button> &#62; Privacy policy</p>
                 <h1>Privacy policy.</h1>
                 <p>At Redtail Insurance Agency, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.</p>
            </div>
            <div className='main-container'>
            {
                policies.map((policy,index)=>{
                    return(
                        <div key={index} className="policy-items">
                            <div className="item-container">
                                <h3>{policy.name}</h3>
                                <p>{policy.description}</p>
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