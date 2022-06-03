import {createContext, useCallback, useContext, useEffect, useState} from "react";

const CartContext = createContext(null)

const CartProvider = ({children}) => {
    const [cartId,setCartId] = useState(JSON.parse(localStorage.getItem('id')) || null)

    useEffect(() => {
        const obj = cartId?.map((item)=>{
            return {
                id:item,
                completed:false
            }
        })
        setCartId(obj)
    }, [])

    useEffect(() => {
        localStorage.setItem('id',JSON.stringify(cartId))
    }, [cartId])

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