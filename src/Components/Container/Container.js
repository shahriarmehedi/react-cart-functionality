import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Container.css';


const Container = () => {
    // DISPLAY JSON DATA
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (item) => {
        const newCart = [...cart, item];
        setCart(newCart);
    }
    // APPLYING USE EFFECT
    useEffect(() => {
        fetch('https://shahriarmehedi.github.io/portfolio-001/generated.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className="container-section mx-auto ml-0 lg:ml-7 pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                        handleAddToCart={handleAddToCart}
                    ></Item>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Container;