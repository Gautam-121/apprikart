import React, { useEffect, useState } from "react"
import "./courses.css"
import { online } from "../../dummyData"
import Heading from "../common/heading/Heading"
import nameLogo  from "../../assets/courses/online/o11.1.png"


const OnlineCourses = () => {

  const [onlineCourses , setOnlineCourses ] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){

    const data = await fetch("http://localhost:8080/api/v1/getOnlineCourses")
    const jsonFile = await data.json()
    console.log(jsonFile)
  }
  
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