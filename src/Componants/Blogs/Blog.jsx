import React from 'react'

function Blog({blog}) {
    const {coverPicture,postDate,author,name,title,Reading_Time,tags,description} = blog
  return (
    <>
    <div>Name:{author.name}</div>
    <div>Name:{name}</div>
    </>
  )
}

export default Blog