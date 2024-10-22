import PropTypes from 'prop-types';

function Blog({blog}) {
    const {coverPicture,postDate,author,name,title,Reading_Time,tags,description} = blog
  return (
    <>
    <div>blog</div>
    </>
  )
}


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog