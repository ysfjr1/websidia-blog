import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Post from "./pages/Post"

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/post' element={<Post />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
