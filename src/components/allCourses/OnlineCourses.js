import React from "react"
import "./courses.css"
import { online } from "../../dummyData"
import Heading from "../common/heading/Heading"
import nameLogo  from "../../assets/courses/online/o11.1.png"


const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={nameLogo} alt="this is imgCover" />
                  <img src={nameLogo} alt='this is profile-img' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses