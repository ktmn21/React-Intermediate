import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const RouterBasics = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/card">Link to the First Task</Link> |
                <Link to="/blog">Link to the Second Task</Link>
            </nav>

            <h2>This is the illustration of the links. In fact, I used the router in the main page, giving the links to
            the specific tasks.</h2>
        </div>
    );
};

export default RouterBasics;
