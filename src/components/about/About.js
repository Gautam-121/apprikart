import React from "react"
import "./about.css"
import Back from "../common/back/back"
import AboutCard from "./AboutCard"
import Footer from "../common/footer/Footer"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <AboutCard />
      <Footer/>
    </>
  )
}

export default About