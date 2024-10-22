
import './App.css'
import Header from './Componants/Header/Header'
import Blogs from './Componants/Blogs/Blogs'
import Bookmark from './Componants/Bookmark/Bookmark'


function App() {


  return (
   <>
  <div className='container mx-auto'>
  <Header></Header>
  <div className='md:flex'>
  <Blogs></Blogs>
  <Bookmark/>
  </div>
  </div>
   </>
  )
}

export default App
