
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
const [markRead , setMarkRead] = useState(0)
const handleMarkRead = (read) => {
  const newMarkRead = markRead+read
  
  setMarkRead(newMarkRead)
}
  return (
   <>
   <Header></Header>
  <div className='container mx-auto'>
  
  <div className='md:flex '>
  <Blogs handleMarkRead={handleMarkRead} handleBookMark = {handleBookMark}></Blogs>
  
     <Bookmark markRead={markRead} bookmark={bookmark} />
  
  </div>
  </div>
   </>
  )
}

export default App
