import {createContext, useCallback, useContext, useEffect, useState} from "react";

const CartContext = createContext(null)

const CartProvider = ({children}) => {
    const [cartId,setCartId] = useState((sessionStorage.getItem("id") ? JSON.parse(sessionStorage.getItem('id')) : null))

    // ADD product in session_START
    const handleOnchange = useCallback((e) =>{
        const newArr = cartId.map((index) =>{
            if(e.target.className===index.id){
                return{
                    ...index,
                    completed:e.target.checked
                }
            }
            return index
        })
        setCartId(newArr)
    },[cartId])
    // ADD product in session_END

    // Delete product from session_START
    const onDelete = (i) =>{
        const newCartId = cartId.filter((el,index) => index!==i)
        setCartId(newCartId)
        sessionStorage.setItem("id", JSON.stringify(newCartId));
    }
    // Delete product from session_END

    return (
        <CartContext.Provider value={{cartId, setCartId,handleOnchange,onDelete}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartProducts = () => useContext(CartContext)

export default CartProvider