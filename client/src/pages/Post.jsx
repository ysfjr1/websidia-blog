import React from 'react'
import Navbar from "../components/Navbar"
import TopicNav from '../components/TopicNav'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Article from '../components/Article'

const Post = () => {
  return (
    <div>
      <Navbar />
      <TopicNav/>
      <div className='container mx-auto flex flex-wrap py-6'>
        <Article />
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default Post