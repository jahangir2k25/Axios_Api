import { createContext, use, useEffect, useState } from 'react';

export const ContextApi = createContext()
const productsData = fetch('https://dummyjson.com/products')
    .then(res => res.json())


const Context = ({ children }) => {
    const [products, setProducts] = useState([])
    const data = use(productsData);
    // console.log(data);
    // console.log(products);
    
    useEffect(() => {
        setProducts(data.products);
    }, []);


    return (
        <ContextApi.Provider value={{ products, setProducts }}>
            {children}
        </ContextApi.Provider >
    )
}

export default Context;
