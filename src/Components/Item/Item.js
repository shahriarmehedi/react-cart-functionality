import React from 'react';
import './Item.css'

const Item = (props) => {
    // DESTRUCTURING ITEMS
    const { name, gender, position, age, income, picture } = props.item;
    const { handleAddToCart, item } = props;
    return (
        <div className="item-cart bg-gray-800 hover:bg-gray-700 rounded m-3 p-5 transform hover:-translate-y-2 to-hover transition duration-300">
            <img className="mx-auto mb-7" src={picture} alt="" />
            <h2>Name: <span className="text-green-200">{name}</span> </h2>
            <h2>Gender: <span className="text-green-200">{gender}</span> </h2>
            <h2>Age: <span className="text-green-200">{age}</span> </h2>
            <h2>Position: <span className="text-green-200">{position}</span> </h2>
            <h2>Income: <span className="text-green-200">${income}</span> </h2>
            <button onClick={() => handleAddToCart(item)} className="mt-10 mb-2 text-gray-800 bg-green-400 hover:bg-white transition duration-150 ease-in-out mt-4 px-8 py-2 rounded-3xl"> <i class="fas fa-shopping-cart"></i> Add to cart</button>
        </div>
    );
};

export default Item;