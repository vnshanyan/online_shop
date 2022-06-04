import classes from "./CartPage.module.css";
import React from "react";
import { useCartProducts } from "../../../contexts/CartProvider";
import { useSelectQuantityProvider } from "../../../contexts/SelectQuantityProvider";
import { memo } from "react"

const Item = ({productData,index}) => {
    const { id,completed,picture,name,description,quantity,price } = productData
    const { handleOnchange,onDelete } = useCartProducts()
    const { selectQuantity,handleSelect } = useSelectQuantityProvider()

    return(
        <div className = { classes.imgItem }>
            <div className = { classes.inputCheckbox }>
                <input type = "checkbox" className = { id } onChange = { handleOnchange } checked = { completed }/>
            </div>
            <div>
                <img src = { picture } alt = "img" width = {170} />
            </div>
            <div>
                <h3> { name } </h3>
                <p> { description } </p><br/>
                <span> price ${ price } </span>
                <select onChange = { handleSelect }
                        id = { id }
                        className={ quantity }
                        value = { selectQuantity.find(el => el.productId === id) ?.productQty }>
                    <option value="">QTY</option>
                    {
                        new Array(+quantity).fill(0).map((item,i)=>{
                            return <option key = { Math.random()} >{ i + 1 }</option>
                        })
                    }
                </select>
            </div>
            <div className = { classes.deleteItem }>
                <button onClick = { () => onDelete(index) }>
                    delete
                </button>
            </div>
        </div>
    )
}
export default memo(Item)
