import Image from "next/image"
import './header.css'

export default function page(){
    return(
        <div className="header">
            <div className="header-logo">
                <Image src="/header-logo.svg" alt="logo" width={206} height={56} id="header-img"/>
            </div>
            <div className="header-button">
                <button>Quotes</button>
            </div>
        </div>
    )
}