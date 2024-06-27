import Image from "next/image";
import Data from "../../../data.json"
import './hero.css'

export default function page(){
    const hero= Data.heros

    return(
        <>
            <div className="slider">
                <div className="slides">
                    <div className="slide"><Image src="/hero-one.svg" alt="Image-one" width={1519} height={723} className="hero-img"/></div>
                    <div className="hero-para">
                        <h1>Safeguard Your Business.</h1>
                        <p>Tailored Insurance Solutions for Every Risk!</p>
                        <button>Explore</button>
                    </div>
                </div>             
                <div className="slides">
                    <Image src="/hero-two.svg" alt="Image-two" width={1519} height={723} className="hero-img"/>
                    <div className="hero-para">
                        <h1>Protecting Your Bottom Line.</h1>
                        <p>Expert Commercial Insurance Tailored for You!</p>
                        <button>Explore</button>
                    </div>
                </div>
                <div className="slides">
                    <Image src="/hero-three.svg" alt="Image-three" width={1519} height={723} className="hero-img"/>
                    <div className="hero-para">
                        <h1>Navigate High-Risk Markets with Confidence.</h1>
                        <p>Your Insurance Partner!</p>
                        <button>Explore</button>
                    </div>
                </div>
                <div className="slides">
                    <Image src="/hero-four.svg" alt="Image-four" width={1519} height={723} className="hero-img"/>
                    <div className="hero-para">
                        <h1>Exceeding Expectations.</h1>
                        <p>Specialized Coverage for Unique Risks!</p>
                        <button>Explore</button>
                    </div>
                </div>
                <div className="slides">
                    <Image src="/hero-five.svg" alt="Image-five" width={1519} height={723} className="hero-img"/>
                    <div className="hero-para">
                        <h1>Insure Your Success.</h1>
                        <p>Customized Solutions for Your Business Needs!</p>
                        <button>Explore</button>
                    </div>
                </div>
                <div className="slides">
                    <Image src="/hero-six.svg" alt="Image-six" width={1519} height={723} className="hero-img" />
                    <div className="hero-para">
                        <h1>Your Shield Against Uncertainty.</h1>
                        <p>Comprehensive Commercial Insurance!</p>
                        <button>Explore</button>
                    </div>
                </div>
                <div className="slides">
                    <Image src="/hero-seven.svg" alt="Image-seven" width={1519} height={723} className="hero-img"/>
                    <div className="hero-para">
                        <h1>Unparalleled Protection.</h1>
                        <p>Trust in our High-Risk expertise!</p>
                        <button>Explore</button>
                    </div>
                </div>
                <div className="slides">
                    <Image src="/hero-eight.svg" alt="Image-eight" width={1519} height={723} className="hero-img"/>
                    <div className="hero-para">
                        <h1>Elevate Your Coverage.</h1>
                        <p>Commercial insurance that goes above and beyond!</p>
                        <button>Explore</button>
                    </div>
                </div>
                <div className="slides">
                    <Image src="/hero-nine.svg" alt="Image-nine" width={1519} height={723} className="hero-img"/>
                    <div className="hero-para">
                        <h1>Secure Your Future.</h1>
                        <p>Personalized insurance for your business journey!</p>
                        <button>Explore</button>
                    </div>
                </div>
                <div className="slides">
                    <Image src="/hero-ten.svg" alt="Image-ten" width={1519} height={723} className="hero-img"/>
                    <div className="hero-para">
                        <h1>Risk Less, Achieve More.</h1>
                        <p>Unlock your business's full potential with us!</p>
                        <button>Explore</button>
                    </div>
                </div>
            </div>
        </>
        
        


    )
}