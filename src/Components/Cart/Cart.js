import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    console.log(cart);


    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;

    }
    // console.log(cart);
    const tax = parseFloat((total * 0.1).toFixed(2));
    console.log(tax);
    
    const grandTotal = total + shipping + tax;

    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${ total }</p>
            <p>Total Shipping Charge: ${ shipping }</p>
            <p>Tax: ${ tax }</p>
            <p>Grand Total: ${grandTotal}</p>
            {props.children}
        </div>
    );
};

export default Cart;