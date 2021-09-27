import React from 'react';

const Cart = (props) => {
    // DECLARING CART VALUE FROM PROPS
    const { cart } = props;

    // TOTAL CALCULATION
    let total = 0;
    for (const item of cart) {
        total = total + item.income
    }

    return (
        <div>
            <h1 className="text-2xl pb-2">Person Added: <b className="text-green-400">{props.cart.length}</b> </h1>
            <div>
                {
                    cart.map(details => <li className="list-none w-2/3 mx-auto m-2 bg-gray-800 rounded">
                        <img className="transform scale-50 inline pl-0" src={details.picture} alt="" />
                        {details.name}</li>)
                }
            </div>
            <div>
                <h1 className="text-2xl pt-2">
                    Total Cost: <b className="text-green-400">${total}</b>
                </h1>
            </div>
            <div>
                <button className="text-gray-800 bg-green-400 hover:bg-white transition duration-150 ease-in-out mt-4 px-8 py-2 rounded-3xl mt-6"><i class="fas fa-check-circle"></i> SUBMIT</button>
            </div>
        </div>

    );
};

export default Cart;