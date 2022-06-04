import {createContext, useContext, useEffect, useState} from "react";

const DetailContext = createContext(null)

const DetailProvider = ({children}) => {
    const [addToCart, setAddToCart] = useState(JSON.parse(sessionStorage.getItem("id")) || []);

    useEffect(() => {
        sessionStorage.setItem("id", JSON.stringify(addToCart));
    }, [addToCart])

    const handleAddToCart = (id) => {
        const arr = [...addToCart, id];

        if (!addToCart.includes(id)) {
            setAddToCart(arr);
        }
    }
    return (
        <DetailContext.Provider value={{addToCart,handleAddToCart}}>
            {children}
        </DetailContext.Provider>
    )
}

export const useDetailProducts = () => useContext(DetailContext)

export default DetailProvider