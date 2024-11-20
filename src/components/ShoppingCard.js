import React, { useState } from 'react';
import {Link} from "react-router-dom";

const ShoppingCart = () => {
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <p>Items in Cart: {cartCount}</p>
            <button onClick={addItemToCart}>Add Item</button>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default ShoppingCart;
