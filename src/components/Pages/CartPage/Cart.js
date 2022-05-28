import React, {useEffect, useState} from "react";
import classes from "./Product.module.css";
import { useDispatch,useSelector } from "react-redux";
import {cartSelector} from "../../../redux/slices/cartSlice"
import {cartProductThunk} from "../../../redux/thunks/cartProductThunk";

const Cart = () => {
    const cartProducts = useSelector(cartSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cartProductThunk())
    }, [])

    return(
        <div className={classes.container}>
            {
                cartProducts.map((item)=>{
                    return (
                        <div key={item.id} className={classes.imgItem}>
                            <div>
                                <img src={item.image} alt="img" width={170} />
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p>price {item.price}</p>
                                <p>qty {item.qty}</p>
                                <select>
                                    {
                                        new Array(+item.qty).fill(0).map((item,i)=>{
                                            return <option key={Math.random()}>{i+1}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className={classes.deleteItem}>
                                <button>
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