import { useState , useEffect } from "react"

const useOnlineCourses = ()=>{

    const [onlineCourses , setOnlineCourses ] = useState([])

   useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){

    const data = await fetch("http://localhost:8080/api/v1/getOnlineCourses")
    const jsonFile = await data.json()
    setOnlineCourses(jsonFile?.onlineCourses)
  }

  return onlineCourses
}

export default useOnlineCourses