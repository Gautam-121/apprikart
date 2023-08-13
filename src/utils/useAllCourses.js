import  {useState , useEffect} from "react"

const useAllCourses = ()=>{

    const [coursesCards , setCoursesCards] = useState([])

    useEffect(()=>{
      fetchData()
    },[])
  
    async function fetchData(){
      const data = await fetch("http://localhost:8080/api/v1/getCourses")
      const jsonFile = await data.json()
      setCoursesCards(jsonFile.courses)
    }

    return coursesCards
}

export default useAllCourses