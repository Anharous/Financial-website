import Image from "next/image";
import './about.css'

export default function page(){
    return(
        <div className="about-container">
            <div className="about-left-container">
                <h1>Experience You Can Trust</h1>
                <div className="about-line"></div>
                <h4>About Us</h4>
                <div className="about-para">
                    <p>Experience You Can Trust Redtail Insurance Agency is a leading provider of commercial insurance solutions in Michigan. With decades of experience serving businesses of all sizes and industries, we have earned a reputation for excellence in the insurance industry.</p>
                    <p>Our team of knowledgeable agents is dedicated to providing exceptional service and innovative insurance solutions tailored to meet the unique needs of our clients. We take the time to understand your business and develop customized coverage options that offer peace of mind.</p>
                    <p>At Redtail Insurance Agency, we are committed to helping businesses thrive by providing the protection they need to succeed.</p>
                </div>
            </div>
            <div className="about-img">
                <Image src="/aboutus.svg" alt="people" width={700} height={639} id="about-image"/>

            </div>
        </div>
    )
}