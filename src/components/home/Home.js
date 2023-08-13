import React from 'react'
import Hero from './hero/Hero'
import AboutCart from "../about/AboutCard"
import OnlineCourses from "../allCourses/OnlineCourses"

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutCart/>
        <OnlineCourses/>
    </div>
  )
}

export default Home
