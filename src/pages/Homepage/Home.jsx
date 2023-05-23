import React from 'react'
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return ( 
    <div className="home">
      <Hero/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home