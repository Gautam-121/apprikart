import React, { useEffect, useState } from "react"
import "./courses.css"
import Heading from "../common/heading/Heading"
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen"


const OnlineCourses = () => {

  const [onlineCourses , setOnlineCourses ] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){

    const data = await fetch("http://localhost:8080/api/v1/getOnlineCourses")
    const jsonFile = await data.json()
    setOnlineCourses(jsonFile?.onlineCourses)
  }

// Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
        cloudName: 'detpakhdb'
     }
  });

  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {onlineCourses.map((val , index) => (
              <div className='box' key={index}>
                <div className='img'>
                <AdvancedImage cldImg={cld.image(val?.cover?.public_id)} />
                  {/* <img src={nameLogo} alt="this is imgCover" /> */}
                  {/* <img src={nameLogo} alt='this is profile-img' className='show' /> */}
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course} lectures</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses