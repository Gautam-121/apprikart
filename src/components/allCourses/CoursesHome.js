import React from "react"
import Back from "../common/back/back"
import CoursesCard from "./CoursesCard.js"
import OnlineCourses from "./OnlineCourses.js"
import Footer from "../common/footer/Footer"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
      <Footer/>
    </>
  )
}

export default CourseHome