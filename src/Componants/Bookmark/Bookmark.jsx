import BookDisplay from "./BookDisplay"

function Bookmark({bookmark}) {
  return (
    <div className='w-1/3 mt-5 p-4 bg-gray-200 rounded-md ml-5'>
      <h1 className="font-bold text-xl text-gray-700 mb-3">Bookmarked Blogs: {bookmark.length}</h1>
      <div className="flex flex-col gap-y-5">
      { 
       
        bookmark.map(book => <BookDisplay key={book.id} book={book} />)
        
      }
      </div>
    </div>
  )
}


export default Bookmark