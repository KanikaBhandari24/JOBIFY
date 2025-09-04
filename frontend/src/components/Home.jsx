import React from 'react'
import Navbar from './shared/Navbar'
import Hero from './Hero'
import Category from './Category'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
  return (
    <div className=''>
    <Navbar />
    <Hero />
    <Category/>
    <LatestJobs/>
    <Footer/>
    </div>
  )
}

export default Home