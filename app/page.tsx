import Image from "next/image"
import  "./page.css"
import Header from './Components/Header/page'
import Hero from './Components/Hero/page'

export default function Home() {
  return (
    <div className="home-container">
       <Header/>
       <Hero/>
    </div>
  );
}
