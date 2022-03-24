import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart'

const Shop = () => {

    //loading product data from local directory
    const [products, setProducts] = useState([]);
    //adding product to cart
    const [cart, setCart] = useState([]);

    


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, [])
    
    //here we are sending a function (an eventhandler) to the  child component.from that we are sending a parameter upto the parent component

    //addtocart button e click korle product cart e add hobe. here cart holo ekta array. Normally btn click korle ai cart array te new product push kore dear kotha. Amra ta na kore spread operator use kore cart array ta ke update korbo. [...cart,product]

    const handleAddToCart = (product) => {
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>

            <div className="products-container">
                 
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={ handleAddToCart }></Product>)
                }
            </div> 

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;