import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    },[]);
    return [products, setProducts]
    //a fucntion in js can return only one single thing, to return multiple we use array. 
}
export default useProducts;