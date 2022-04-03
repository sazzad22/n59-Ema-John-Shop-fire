import React, { useEffect, useState } from 'react';
import { addToDb, 
    removeFromDb,
    deleteShoppingCart, 
    getStoredCart} from "../../utilities/fakedb";
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart'
import useProducts from '../../Hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {

    //loading product data from local directory
    // const [products, setProducts] = useState([]);
    //adding product to cart
    const [cart, setCart] = useState([]);

    //here from 28 to 45 line code we will use the same code to show products in the order review page.Now we will do this outside of this component


    /* useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []) */
    //instead of the code above we use Custom hook
    const [products, setProducts] = useProducts();

    //getting product from an external file or api ,we use useEffect
    //here from 28 to 45 line code we will use the same code to show products in the order review page.Now we will do this outside of this component(line 28 above)


    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);//find will get one product is matched, everytime
            // console.log(addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                
                savedCart.push(addedProduct);
            }
        }

        setCart(savedCart); //this set cart updated the cart with the parameter savedcart which is derived from the local storage.Here setCart is a state action used in line 15 to update cart info.By using set cart here we cart derive the cart info even after a reload 'cause info is saved in local storage

    },[products])//dependecy added products means whenever there is a change the products useEffect is going to run . Otherwise with no dependecy it runs only once. In that case this piece of code runs before there is any product is added in the local storage
    
    //here we are sending a function (an eventhandler) to the  child component.from that we are sending a parameter upto the parent component

    //addtocart button e click korle product cart e add hobe. here cart holo ekta array. Normally btn click korle ai cart array te new product push kore dear kotha. Amra ta na kore spread operator use kore cart array ta ke update korbo. [...cart,product]

    const handleAddToCart = (product) => {
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }


    return (
        <div className='shop-container'>

            <div className="products-container">
                 
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={ handleAddToCart }></Product>)
                }
            </div> 

            <div className="cart-container">
                {/* component er peter vetor koto elment add korle sheta props.children hishebe access kora jay ebong element ta show o kora jay.To do that one has to mention the {props.childdren} dinamically inside that element itself (inside the same page)  */}
                <Cart cart={cart}>
                <Link to='/order'>
                    <button>Review Order</button></Link>
                    
                </Cart>
            </div>

        </div>
    );
};

export default Shop;