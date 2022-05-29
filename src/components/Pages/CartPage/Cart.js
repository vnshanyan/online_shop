import React, {useEffect, useState} from "react";
import classes from "./Product.module.css";
import { useDispatch,useSelector } from "react-redux";
import {cartSelector} from "../../../redux/slices/cartSlice"
import {cartProductThunk} from "../../../redux/thunks/cartProductThunk";
import {deleteCartProductThunk} from "../../../redux/thunks/deleteCartProductТhunk";
import {updateCartProductThunk} from "../../../redux/thunks/updateCartProductThunk";

const Cart = () => {
    const [selectQuantity, setSelectQuantity] = useState([])
    const [selectedProducts,setSelectedProducts] = useState([])
    const cartProducts = useSelector(cartSelector)
    const dispatch = useDispatch()

    const user = false
    useEffect(() => {
        dispatch(cartProductThunk())
    }, [])


const handleOnchange = (e) =>{
        const newArr = {
            id:e.target.className,
            completed:e.target.checked
        }
    setSelectedProducts([newArr])
}
    const handleSelect = (e) =>{
        const repeateObj = selectQuantity.find(item=>item.productId===e.target.id)
        if(repeateObj){
           repeateObj.productQty = e.target.value
            return setSelectQuantity([...selectQuantity])
        }
        const newObj = {
            productId:e.target.id,
            productQty:e.target.value,
            completed:false
        }
        return setSelectQuantity([...selectQuantity,newObj])
    }
    return(
        <div className={classes.container}>
            <div className={classes.buyButton}>
                <button onClick={() => dispatch(updateCartProductThunk(1))}>Buy the selected ones</button>
            </div>
            {
                cartProducts.map((item,i)=>{
                    return (
                        <div key={item.id} className={classes.imgItem}>
                            <input type="checkbox" className={item.id} onChange={handleOnchange}/>
                            <div>
                                <img src={item.image} alt="img" width={170} />
                            </div>
                            <div>
                                <p>{item.title}</p>
                                <p>price {item.price}</p>
                                <p>qty {item.qty}</p>
                                <select onChange={handleSelect} id={item.id} value={selectQuantity.find(el=>el.productId===item.id)?.productQty}>
                                    {
                                        new Array(+item.qty).fill(0).map((item,i)=>{
                                            return <option key={Math.random()}>{i+1}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className={classes.deleteItem}>
                                <button onClick={() => dispatch(deleteCartProductThunk(item.id))}>
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