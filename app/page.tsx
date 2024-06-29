import Image from "next/image"
import  "./page.css"
import Header from './Components/Header/page'
import Hero from './Components/Hero/page'
import About from './Components/About/page'
import Cards from './Components/Cards/page'
import Form from './Components/Form/page'
import Footer from './Components/Footer/page'
import Accordian from './Components/Accordion/page'
// import Section from './Components/Form/page'

export default function Home() {
  return (
    <div className="home-container">
      <Header/>
      <Hero/>
       {/* phase-two */}
      <div className="phase-two-container">
        <div className="item-one">
          <p>At Redtail Insurance Agency, we specialize in providing comprehensive insurance solutions tailored to meet the unique needs of businesses in Michigan. With a focus on high-risk markets, excess and surplus lines, as well as life insurance and annuities for high net worth individuals, we are committed to protecting what matters most to our clients.</p>
        </div>
        <div className="phase-two-right-subcontainer">
          <div className="item-two">
            <p>Our experienced team understands the challenges that businesses face and works tirelessly to provide personalized coverage options that offer peace of mind. Whether you're a small startup or a large corporation, we've got you covered.</p>
          </div>
          <div className="item-three">
            <p>Explore our website to learn more about our services and how we can help safeguard your business.</p>
          </div>
        </div>
      </div> 
        
      <About/>
      <Cards/>
      <Form/>
      {/* <Section/> */}
      <Accordian/>
      <Footer/>
    </div>
  );
}
