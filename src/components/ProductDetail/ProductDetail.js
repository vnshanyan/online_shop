import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addItem, delItem } from '../redux/actions/index';

import { useProductsContext } from "../../contexts/ProductsProvider";

const ProductDetail = () => {
    // const [cardBtn, setCardBtn] = useState("Add to Card");
    const { allProducts } = useProductsContext();
    const productId = useParams();
    const productDetail = allProducts.filter(item => item.id == productId.id);
    const product = productDetail[0];
    const [addToCart, setAddToCart] = useState(JSON.parse(localStorage.getItem("id")) || []);

    useEffect(() => {
        localStorage.setItem("id", JSON.stringify(addToCart));
    }, [addToCart])

    const handleAddToCart = (id) => {
        const arr = [...addToCart, id];
        
        if (!addToCart.includes(id)) {
            console.log(arr);
            setAddToCart(arr);
        }
    }
    console.log(addToCart);

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.picture} alt={product.name} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.name}</h1>
                        <hr />
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead">{product.description}</p>
                        <button className="btn btn-outline-primary my-5" onClick={() => handleAddToCart(product.id)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;