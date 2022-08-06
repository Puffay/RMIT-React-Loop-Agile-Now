const BlogList = (props) => {
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <p>{blog.author}</p>
                </div>
            ))}
            {blogs.map(blog => <div key={blog.id}>{blog.title}</div>)}
        </div>
     );
}


export default BlogList;