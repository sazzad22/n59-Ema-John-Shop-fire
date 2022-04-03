import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faBagShopping,faShoppingBag,faShoppingBasket,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Product.css"

//This element is The individual row of products on the main left side
const Product = (props) => {
    // console.log(props);

    //recieving the handleAddtoCart 



    //destructuring
    const { category, name, seller, price, stock, ratings, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings:{ratings}</small></p>

            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;<h4>This is Product</h4>