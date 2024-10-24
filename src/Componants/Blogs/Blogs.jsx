import React, { useEffect, useState } from 'react'
import Blog from './Blog'

function Blogs({handleBookMark , handleMarkRead}) {
    const[blogs , setBlogs] =useState([])
    useEffect(()=> {
        const fetchBlogsData =async () => {
            const res =await fetch('/example.json');
            const data =await res.json()
            setBlogs(data)
        }
        fetchBlogsData()
    } , [])
  return (
    <>
    <div className='w-2/3 '>
        {
           blogs.map(blog => <Blog handleMarkRead={handleMarkRead} handleBookMark={handleBookMark} key={blog.id} blog={blog}></Blog> )
        }
    </div>
    </>
  )
}

export default Blogs