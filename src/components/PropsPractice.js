import React from 'react';
import {Link} from "react-router-dom";

const BlogPostComponent = ({ blogs }) => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <div className="blog-list">
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-post">
                        <img src={blog.imageUrl} alt={blog.title} className="blog-img" />
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                    </div>
                ))}
            </div>

            <Link to="/">Home</Link>
        </div>
    );
};

export default BlogPostComponent;
