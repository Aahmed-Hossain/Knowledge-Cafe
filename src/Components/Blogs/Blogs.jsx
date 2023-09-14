import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl font-semibold">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                handleBookmark={handleBookmark}
                handleMarkAsRead={handleMarkAsRead}
                key={blog.id}
                blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func
}

export default Blogs;