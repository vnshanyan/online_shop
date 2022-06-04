import {createContext, useContext, useState, useEffect} from "react";
import axios from "axios";
import {baseUrl} from "../api/api";

export const ProductsContext = createContext(null);

const ProductsProvider = ({children}) => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [price, setPrice] = useState([]);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);

    useEffect(() => {
        axios.get(`${baseUrl}/products`)
            .then(res => {
                    setAllProducts(res.data);
                    setFilteredProducts(res.data);
                    
                    const pricesArray = res.data?.map(product => {
                        return product.price;
                    });
                    setPrice([Math.min(...pricesArray), Math.max(...pricesArray)]);
                    setMinPrice(Math.min(...pricesArray));
                    setMaxPrice(Math.max(...pricesArray));
                });
    }, []);

    return <ProductsContext.Provider value={{allProducts, filteredProducts, setFilteredProducts, price, setPrice, minPrice, maxPrice}}>
        {children}
    </ProductsContext.Provider>
}

export const useProductsContext = () => useContext(ProductsContext)

export default ProductsProvider