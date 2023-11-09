import React from 'react'
import Navbar from "../components/Navbar"
import TopicNav from '../components/TopicNav'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Articles from '../components/Articles'

const Home = () => {
  return (
    <div>
      <Navbar />
      <TopicNav/>
      <div className='container mx-auto flex flex-wrap py-6'>
        <Articles />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default Home