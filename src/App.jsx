
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
const handleMarkRead = (id,read) => {
  console.log(id);
  const newMarkRead = markRead+read
  setMarkRead(newMarkRead)
  const remaining = bookmark.filter(bookm => bookm.id !== id)
  setBookMark(remaining)
}
console.log(bookmark);
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
