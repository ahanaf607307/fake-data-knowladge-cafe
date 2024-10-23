import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdOutlineBookmarks } from "react-icons/md";
function Blog({blog , handleBookMark , handleMarkRead}) {
    const {id,coverPicture,postDate,author,name,title,Reading_Time,tags,description} = blog
    const [color , setColor]=useState(false)

  return (
    <>
    <>
    <div className='my-5'>
    <div className="card bg-base-100 w-full shadow-xl">
  <figure>
    <img
      src={coverPicture}
      alt="Shoes" />
  </figure>
  <div className="pt-10 pb-5 px-2">
    <div className='flex justify-between items-center'>
    <div className='flex gap-4'>
        <img className='h-12 w-auto' src={author.image} alt="" />
        <div>
            <h1 className='font-bold text-xl text-gray-700'>{author.name}</h1>
            <p className='text-sm font-semibold text-gray-500'>{postDate}</p>
        </div>
    </div>
    <div className='flex gap-x-2 items-center'>
        <h1 className='font-semibold text-gray-500'>{Reading_Time} min read</h1>
        <button onClick={() => handleBookMark(blog)} className="btn bg-gray-50 "><MdOutlineBookmarks className='text-xl'/></button>
    </div>
    </div>
    <h1 className='text-2xl md:text-4xl font-bold my-3 text-gray-700 pr-5 '>{name}</h1>
    <h1 className='text-sm  font-bold my-3 text-gray-700 pr-5 '>{title}</h1>
   <div>
   {
    tags.map((hash , idx) => <span key={idx}> {hash}</span>)
   }
   </div>
    <p onClick={()=> {handleMarkRead(id,Reading_Time)
        setColor(true)
    }} className={`underline text-sm font-semibold ${color ? 'text-orange-400' : 'text-gray-500'}  cursor-pointer`}>{description}</p>
  </div>
</div>
    </div>

    </>
    </>
  )
}


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog