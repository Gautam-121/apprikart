import React from "react"
import Back from "../common/back/back"
import CoursesCard from "./CoursesCard.js"
import OnlineCourses from "./OnlineCourses.js"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome