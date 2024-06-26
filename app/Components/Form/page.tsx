import Image from "next/image";
import './form.css'

export default function page(){
    return(
        <div className="phase-five">
            <div className="phase-five-head">
                <h1>Get in touch!</h1>
                <div className="phase-five-line"></div>
            </div>
            <div className="phase-five-container">
                <div className="form-container">
                    <h3>Ready to learn more about how Redtail Insurance Agency can help protect your business?</h3>
                    <p>Contact us today to schedule a consultation with one of our experienced agents. We're here to answer your questions and provide personalized insurance solutions that meet your needs.</p>
                    <div className="form-inside-container">
                        <div className="form-row-one">
                            <div className="form-inputbox-container">
                                <label htmlFor="fname">First name</label>
                                <div className="inputbox">
                                    <Image src="/form-user.svg" alt="user" width={20} height={20} />
                                    <div className="form-box-inline"></div>
                                    <input type="text" id="fname" name="fname" placeholder="First name" required/>
                                </div>
                            </div>
                            <div className="form-inputbox-container">
                                <label htmlFor="lname">Last name</label>
                                <div className="inputbox">
                                    <Image src="/form-user.svg" alt="user" width={20} height={20} />
                                    <div className="form-box-inline"></div>
                                    <input type="text" id="lname" name="lname" placeholder="Last name" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-row-two">
                            <div className="form-inputbox-container">
                                <label htmlFor="email">E-mail address</label>
                                <div className="inputbox">
                                    <Image src="/form-mail.svg" alt="mail" width={20} height={20} />
                                    <div className="form-box-inline"></div>
                                    <input type="email" id="email" name="email" placeholder="E-mail address" required/>
                                </div>
                            </div>
                            <div className="form-inputbox-container">
                                <label htmlFor="phone">Phone number</label>
                                <div className="inputbox">
                                    <Image src="/form-phone.svg" alt="phone" width={20} height={20} />
                                    <div className="form-box-inline"></div>
                                    <input type="string" id="phone" name="phone" placeholder="Phone Number" required/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row-three">
                            <label htmlFor="insurance">Insurance coverage</label> <br/>
                            <input type="text" id="insurance" name="insurance" required/>
                        </div>
                        <div className="form-row-four">
                            <label htmlFor="message">How can we help?</label> <br/>
                            <textarea id="message" name="message" required ></textarea>
                        </div>
                        <div className="form-row-five">
                            <input type="submit" value="Get A Quote" />
                        </div>
                    </div>
                </div>
                <div className="image">
                    <Image src="/form-right-img.svg" alt="form-iage" width={604} height={745}/>
                </div>
            </div>

        </div>
    )
}