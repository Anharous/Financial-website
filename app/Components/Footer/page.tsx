import Image from "next/image";
import './footer.css'
import Link from "next/link";

export default function page(){
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <Image src='/footer-logo.svg' alt="footer-logo.svg" width={202} height={56}/>
                    <p>Benefit from our decades of industry experience and knowledge, ensuring you receive expert guidance and support at every step of your life insurance journey.</p>
                    <div className="footer-icons">
                        <Image src="/footer-insta.svg" alt="insta-icon" width={40} height={40}/>
                        <Image src="/footer-facebook.svg" alt="facebook-icon" width={40} height={40}/>
                        <Image src="/footer-linkedin.svg" alt="linkedin-icon" width={40} height={40}/>
                        <Image src="/footer-twitter.svg" alt="twitter-icon" width={40} height={40}/>
                    </div>
                </div>
                <div className="footer-vertical-line"></div>
                <div className="footer-top-right">
                    <h2>Contact info</h2>
                    <div className="contact">
                        <Image src="/footer-phone.svg" alt="phone-icon" width={24} height={24}/>
                        <p>586-907-8700</p>
                    </div>
                    <div className="contact">
                        <Image src="/footer-mail.svg" alt="mail-icon" width={24} height={24}/>
                        <p>sam@redtail.agency</p>
                    </div>
                    <div className="contact">
                        <Image src="/footer-location.svg" alt="location-icon" width={24} height={24}/>
                        <p>455 E Maple Rd Troy, Michigan 48083, USA.</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-copyright">
                    <p>© 2024 Redtail Insurance Agency, New York, NY. All Rights Reserved.</p>
                </div>
                <div className="footer-bottom-link">
                    <Link href="/Components/Terms" id="footer-link-one">Terms of use</Link>
                    <Link href="/Components/Policy" id="footer-link-two">Privacy & Other policies</Link>
                </div>
            </div>
        </div>
    )
}