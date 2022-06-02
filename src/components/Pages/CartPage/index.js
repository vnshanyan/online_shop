import React, {useEffect, useState} from "react";
import classes from "./Product.module.css";
import { useDispatch,useSelector } from "react-redux";
import { cartSelector } from "../../../redux/slices/cartSlice"
import { userSelector } from "../../../redux/slices/loginSlice"
import { cartProductThunk } from "../../../redux/thunks/cartProductThunk";
import { useCartProducts } from "../../../contexts/CartProvider";
import { useSelectQuantityProvider } from "../../../contexts/SelectQuantityProvider";
import { updateCartProductThunk } from "../../../redux/thunks/updateCartProductThunk";
import { useNavigate } from "react-router-dom";
import Item from "./Item";

let arr = ["2","3","4","16","11","10"]
sessionStorage.setItem('id',JSON.stringify(arr));


const Cart = () => {
    const { cartId,setCartId} = useCartProducts()
    const { selectQuantity } = useSelectQuantityProvider()
    const [text,setText] = useState(false)
    const cartProducts = useSelector(cartSelector)
    const loginUser = useSelector(userSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(cartProductThunk())
    }, [])
    const buySelected = () =>{
        if(!loginUser){
            navigate("/login")
        }else{
            if(selectQuantity.some(el=>el.productQty)){
                if(cartId.some(el => el.completed)){
                    const newArr = cartId.filter(el => el.completed!==true)
                    selectQuantity.filter(element => cartId.find(el => el.id === element.productId)?.completed).forEach((item)=>{
                        dispatch(updateCartProductThunk(item))
                    })
                    setCartId(newArr)
                    setText(prev=>!prev)
                    setTimeout(()=>{
                        setText(false)
                    },4000)
                }
            }
        }
    }
    return(
        <div className = {classes.container}>
            <div className = {classes.headerContainer}>
                <h2 className={classes.h2Shoping}>
                    { cartId.length !== 0 ? "Shopping Index" : "Shopping Index Empty" }
                </h2>
                { text && <p className={classes.pShoping}>Thank you for shopping</p>}
            </div>
            <div className = {classes.buyButton}>
                <button onClick = { buySelected }> Buy the selected ones </button>
            </div>
            {
                cartProducts.filter((el) => {
                    return cartId.some(item => item.id === el.id) && el
                }).map((item,i) => {
                    return <Item key={item.id} productData={item} index={i}/>
                })
            }
        </div>
    )
}
export default Cart