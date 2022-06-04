import React, {useEffect, useState} from "react";
import classes from "./CartPage.module.css";
import { useDispatch,useSelector } from "react-redux";
import { cartSelector } from "../../../redux/slices/cartSlice"
import { loginSelector } from "../../../redux/slices/loginSlice"
import { cartProductThunk } from "../../../redux/thunks/cartProductThunk";
import { useCartProducts } from "../../../contexts/CartProvider";
import { useSelectQuantityProvider } from "../../../contexts/SelectQuantityProvider";
import { updateCartProductThunk } from "../../../redux/thunks/updateCartProductThunk";
import { useNavigate } from "react-router-dom";
import Item from "./Item";

// let arr = ["2","3","4","16","11","10"]
// sessionStorage.setItem('id',JSON.stringify(arr));

const Cart = () => {
    const { cartId,setCartId} = useCartProducts()
    const { selectQuantity } = useSelectQuantityProvider()
    const [text,setText] = useState(false)
    const [errText,setErrText] = useState(false)
    const cartProducts = useSelector(cartSelector)
    const loginUser = useSelector(loginSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(cartProductThunk())
    }, [])


    const buySelected = () =>{
        if(!loginUser){
            navigate("/login")
        }else{
            // selectQuantity <=> Selected products
            if(selectQuantity.some(el=>el.productQty)){
                // Is one of the products checked?
                if(cartId.some(el => el.completed)){
                    const newArr = cartId.filter(el => el.completed!==true)
                    // Update information in DB_START
                    selectQuantity.filter(element => cartId.find(el => el.id === element.productId)?.completed).forEach((item)=>{
                        dispatch(updateCartProductThunk(item))
                    })
                    // Update information in DB_START
                    // Successful
                    setCartId(newArr)
                    setText(prev=>!prev)
                    setTimeout(()=>{
                        setText(false)
                    },4000)
                }else{
                    // Set ERROR text_START
                    setErrText(prev=>!prev)
                    setTimeout(()=>{
                        setErrText(false)
                    },4000)
                    // Set ERROR text_END
                }
            }else{
                // Set ERROR text_START
                setErrText(prev=>!prev)
                setTimeout(()=>{
                    setErrText(false)
                },4000)
                // Set ERROR text_END
            }
        }
    }
    return(
        <div className = {classes.container}>
            <div className = {classes.headerContainer}>
                <h2 className={classes.h2Shoping}>
                    {console.log('cartId: ',cartId)}
                    { (cartId === undefined || cartId === 'null' || cartId?.length !== 0) ? "Shopping cart" : "Shopping cart Empty" }
                </h2>

                { errText && <p className={classes.error}>Something went wrong!</p>}
                { text && <p className={classes.pShoping}>Thank you for shopping</p>}
            </div>
            <div className = {classes.buyButton}>
                <button onClick = { buySelected }> Buy the selected ones </button>
            </div>
            {
                cartProducts.filter((el) => {
                    return cartId?.some(item => item.id === el.id) && el
                }).map((item,i) => {
                    return <Item key={item.id} productData={item} index={i}/>
                })
            }
        </div>
    )
}
export default Cart
