import Header from "./components/common/header/Header"
import "./app.css"
import Home from "./components/home/Home"
import CourseHome from "./components/allCourses/CoursesHome"
import About from "./components/about/About"
import Error from "./components/error/Error"
import { Outlet  , createBrowserRouter } from "react-router-dom"


const App = ()=>{
  return (
   <>
      <Header/>
      <Outlet/>
   </>
  )
}

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/course",
        element : <CourseHome/>
      }
    ]
  }
])

export default appRouter
