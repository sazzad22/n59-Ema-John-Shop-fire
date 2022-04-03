import React, { useEffect } from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    console.log(cart);
    //here function ta comp er baire likhe hook hishebe export kore ei comp e use kora hocche . It is called Custorm hook
    return (
        <div className='shop-container'>
            {/* react er kono css file module kore na rakhle (specific kono js file er jonno set na korle) sheta onno js file er jnno o use kora jay. Ekhane <Cart element ta <Shop e jevabe show kora hoise sheivabei <Order comp eo show kora hocche.  */}
            
            <div className='review-item-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>
            

        </div>
    );
};

export default Order;