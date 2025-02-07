
const Home = ({blogs}) => {


  return (
    <div className="home">
      {blogs.length === 0 && <h1>No Blogs Found</h1>}
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="blogPage" key={blog._id}>
            <img src={blog.image} alt="" />
            <h1>{blog.title}</h1>
            <p>{blog.time}</p>
          </div>
        ) )}
      </div>
    </div>
  )
}

export default Home