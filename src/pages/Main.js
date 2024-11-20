import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>React Intermediate Tasks</h1>
            <ul>
                <li><Link to="/card">Reusable Card Component</Link></li>
                <li><Link to="/blog">Blog Post</Link></li>
                <li><Link to="/router">React Router Basics</Link></li>
                <li><Link to="/cart">Shopping Cart</Link></li>
                <li><Link to="/fetch">Fetching Data</Link></li>
                <li><Link to="/form">Form Validation</Link></li>
            </ul>
        </div>
    );
};

export default Main;