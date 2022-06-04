import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProductsContext } from "../../contexts/ProductsProvider";
import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
    const [cardBtn, setCardBtn] = useState("Add to cart");
    const { allProducts } = useProductsContext();
    const productId = useParams();
    const productDetail = allProducts.filter(item => item.id == productId.id);
    const product = productDetail[0];
    const [addToCart, setAddToCart] = useState(
        (sessionStorage.getItem("id")!=='undefined' && sessionStorage.getItem("id")!=='' && sessionStorage.getItem("id")!==null)
         ? JSON.parse(sessionStorage.getItem("id")) : []);

         
    const navigate = useNavigate();

    const handleAddToCart = (id) => {
        const arr = [...addToCart, {id, completed: false}];

        const checkID = addToCart.find(el => {
            return el.id === id
        });
        if(checkID === undefined){
            setAddToCart(arr);
            sessionStorage.setItem("id", JSON.stringify(arr));
        }
        setCardBtn('Added');
        setTimeout(() => {            
            navigate('../cart')
        }, 2000)
    }

    return (
        product !== undefined && 
            <section className={classes.singleProduct}>
                <div className={classes.productImageContainer}>
                    <img src={product.picture} className={classes.productImage} alt={product.name} />
                </div>
                <div className={classes.productSummary}>
                    <span className={classes.productCategory}>Category: {product.category}</span>
                    <h1 className={classes.productTitle}>{product.name}</h1>
                    <hr />
                    <p className={classes.productPrice}>${product.price}</p>
                    <p className={classes.productDescription}>{product.description}</p>
                    <button className={classes.addToCart} onClick={() => handleAddToCart(product.id)}>{cardBtn}</button>
                </div>
            </section>        
    );
};

export default ProductDetail;