import React from "react"
import useAllCourses from "../../utils/useAllCourses";
import "./courses.css"
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen"

const CoursesCard = () => {

  const coursesCards = useAllCourses()

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
        cloudName: 'detpakhdb'
     }
  });

  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCards.map((val , index) => (
            <div className='items' key={index}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                  <AdvancedImage cldImg={cld.image(val?.cover?.public_id)} />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='details'>
                  <div className='box' key={index}>
                          <div className='dimg'>
                          <AdvancedImage cldImg={cld.image(val?.instructor?.cover?.public_id)} />
                          </div>
                          <div className='para'>
                            <h4>{val?.instructor?.name}</h4>
                          </div>
                        </div>
                        <span>{`${val?.noOfLectures} lectures (${val?.noOfHours} hrs)`}</span>
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {`$${val.priceAll} All Course`} / {`$${val?.pricePerMonth} per month`}
                </h3>
              </div>
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CoursesCard
