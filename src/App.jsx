
import './App.css'
import Header from './Componants/Header/Header'
import Blogs from './Componants/Blogs/Blogs'
import Bookmark from './Componants/Bookmark/Bookmark'
import { useState } from 'react'


function App() {

  const [bookmark , setBookMark]=useState([])
  const handleBookMark = (title) =>{
    const newBook = [...bookmark , title]
    setBookMark(newBook)
   
  }

  return (
   <>
  <div className='container mx-auto'>
  <Header></Header>
  <div className='md:flex '>
  <Blogs handleBookMark = {handleBookMark}></Blogs>
  
     <Bookmark bookmark={bookmark} />
  
  </div>
  </div>
   </>
  )
}

export default App
