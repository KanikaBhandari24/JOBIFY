import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Browse from './components/Browse'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserProfile from './components/UserProfile'
import JobDetails from './components/JobDetails'

const appRouter=createBrowserRouter([
  // {
  //   path:'Navbar/',
  //   element:<Navbar/>
  // },
  {
    path:'/',
    element:<Home/>
  },  
  {
    path:'login/',
    element:<Login/>
  },
  {
    path:'signup/',
    element:<Signup/>
  },
  {
    path:'jobs/',
    element:<Jobs/>
  },
  {
    path:'/detail/:id',
    element:<JobDetails/>
  },
  {
    path:'browse/',
    element:<Browse/>
  },
  {
    path:'profile/',
    element:<UserProfile/>
  }

])
function App() {

  return (
    <>
    <div className='mozilla'>
      <RouterProvider router={appRouter} />
    </div>
    </>
  )
}

export default App