import React, { useEffect, useState } from 'react'
import Blog from './Blog'

function Blogs() {
    const[blogs , setBlogs] =useState([])
    useEffect(()=> {
        const fetchBlogsData =async () => {
            const res =await fetch('../../../public/example.json');
            const data =await res.json()
            setBlogs(data)
        }
        fetchBlogsData()
    } , [])
  return (
    <>
    <div>
        {
           blogs.map(blog => <Blog blog={blog}></Blog> )
        }
    </div>
    </>
  )
}

export default Blogs