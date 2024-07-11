import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Freebooks from '../components/Freebooks'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Freebooks />
            <Footer />
        </>
    )
}

export default Home