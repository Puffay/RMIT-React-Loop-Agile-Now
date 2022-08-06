import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    //let name = 'John Doe';
    const [name, setName] = useState('John Doe');
    const [age, setAge] = useState(20);
    const [blogs, setBlogs] = useState([
        { title: 'React', body: '10', author: 'John Doe', id: 1 },
        { title: 'Vue', body: '20', author: 'No More', id: 2 },
        { title: 'Angular', body: '30', author: 'Please Stop', id: 3 }
    ]);

    const handleClick = () => {
        setName('Whoever this is');
        setAge(Math.random() * 10);
    }

    return ( 
        <div className="home">
            <h1>Home</h1>
            <BlogList blogs={blogs} title="all blogs" />
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
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
 
export default Home;