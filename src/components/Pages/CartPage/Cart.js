import React, {useEffect, useState} from "react";
import classes from "./Product.module.css";
import { useDispatch,useSelector } from "react-redux";
import {cartSelector} from "../../../redux/slices/cartSlice"
import {userSelector} from "../../../redux/slices/loginSlice"
import {cartProductThunk} from "../../../redux/thunks/cartProductThunk";
import {useNavigate} from "react-router-dom";
import {useCartProducts} from "../../../contexts/CartProvider";
import {useSelectQuantityProvider} from "../../../contexts/SelectQuantityProvider";
import {updateCartProductThunk} from "../../../redux/thunks/updateCartProductThunk";

let arr = ["2","3","4","16","11","10"]
sessionStorage.setItem('id',JSON.stringify(arr));


const Cart = () => {
    const { cartId,setCartId,handleOnchange,onDelete } = useCartProducts()
    const { selectQuantity,handleSelect } = useSelectQuantityProvider()
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
            const newArr = cartId.filter(el => el.completed!==true)
            selectQuantity.filter(element => cartId.find(el => el.id === element.productId)?.completed).forEach((item)=>{
                 dispatch(updateCartProductThunk(item))
            })
            setCartId(newArr)
        }
    }

    return(
        <div className = {classes.container}>
            <div className = {classes.headerContainer}>
                <h2>
                    { cartId.length !== 0 ? "Shopping Cart" : "Shopping Cart Empty" }
                </h2>

            </div>
            <div className = {classes.buyButton}>
                <button onClick = { buySelected }> Buy the selected ones </button>
            </div>

            {
                cartProducts.filter((el) => {
                    return cartId.some(item => item.id === el.id) && el
                }).map((item,i) => {
                    return (
                        <div key = { item.id } className = { classes.imgItem }>
                            <div className = { classes.inputCheckbox }>
                                <input type = "checkbox" className = { item.id } onChange = { handleOnchange } checked = { item.completed }/>
                            </div>
                            <div>
                                <img src = { item.picture } alt = "img" width = {170} />
                            </div>
                            <div>
                                <h3> { item.name } </h3>
                                <p> { item.description } </p><br/>
                                <span> price ${ item.price } </span>
                                <select onChange = { handleSelect }
                                        id = { item.id }
                                        className={ item.quantity }
                                        value = { selectQuantity.find(el => el.productId === item.id) ?.productQty }>
                                    <option>QTY</option>
                                    {
                                        new Array(+item.quantity).fill(0).map((item,i)=>{
                                            return <option key = { Math.random()}>{ i + 1 }</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className = { classes.deleteItem }>
                                <button onClick = { () => onDelete(i) }>
                                    delete
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Cart