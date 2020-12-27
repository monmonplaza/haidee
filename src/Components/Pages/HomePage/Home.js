import React from 'react'
import About from '../../About/About'
import Blog from '../../Blog/Blog'
import Cta from '../../Cta/Cta'
import Gallery from '../../Gallery/Gallery'
import HeroSection from '../../Hero/HeroSection'
import Price from '../../Price/Price'
import Footer from '../../Footer/Footer'

function Home() {
    return (
        <>
            <HeroSection />
            <About/>   
            <Gallery/>
            <Price/>
            <Blog/>
            <Cta/>
            <Footer/>
        </>
    )  
     
    
}

export default Home
