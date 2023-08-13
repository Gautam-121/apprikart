import React from 'react'
import Hero from './hero/Hero'
import AboutCart from "../about/AboutCard"
import OnlineCourses from "../allCourses/OnlineCourses"
import Footer from '../common/footer/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutCart/>
        <OnlineCourses/>
        <Footer/>
    </div>
  )
}

export default Home
