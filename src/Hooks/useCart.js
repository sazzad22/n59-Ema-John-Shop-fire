import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products)=>{
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            //! y using map instead of find won't return the cart I want
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                //here we are trying to get the amount of the products, through the quantity of each of product not through the array length
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);
    return [cart, setCart];
}

export default useCart;