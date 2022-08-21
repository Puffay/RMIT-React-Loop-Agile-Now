// use this for forum
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return ( 
        <div className="home">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className='userBlog' key={blog.id}>
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