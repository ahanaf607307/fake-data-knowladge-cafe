import BookDisplay from "./BookDisplay"

function Bookmark({bookmark , markRead}) {
  
  return (
  <>
    <div className='w-1/3'>
 <div className="mt-5 ml-5  border-2 border-orange-300 bg-orange-100 rounded-xl">
 <h1 className={`font-bold pl-1 pt-1 text-lg items-start  ml-2 my-2 ${markRead ? 'text-orange-400' : 'text-gray-600'} mb-3`} >Total Reaging Time : {markRead} </h1>
 </div>

   <div className='mt-5 h-screen p-4 bg-orange-100 rounded-md ml-5'>
    
    <h1 className="font-bold text-xl text-gray-700 mb-3">Bookmarked Blogs: {bookmark.length}</h1>
    <div className="flex flex-col gap-y-5">
    { 
     
      bookmark.map(book => <BookDisplay  key={book} book={book} />)
      
    }
    </div>
  </div>
   </div>
  </>
  )
}


export default Bookmark