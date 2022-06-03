import classes from "./ProductBlock.module.css";
import { useProductsContext } from "../../contexts/ProductsProvider";
import { NavLink } from "react-router-dom";

const ProductBlock = () => {    
    const {filteredProducts, setFilteredProducts} = useProductsContext();

    return filteredProducts?.map((product) => {
        return (
            <div className={classes.product} key={product.id}>
                <div className={classes.productImageContainer}>
                    <img src={product.picture} alt={product.name} />
                </div>
                <span className={classes.productCategory}>Category: {product.category}</span>
                <p className={classes.productTitle}>{product.name}</p>
                <span className={classes.productDescription}>{product.description}</span>
                <p className={classes.productPrice}>${product.price} 
                    <NavLink to={`/products/product/${product.id}`} className="btn btn-outline-primary">
                        <button>Buy</button>
                    </NavLink>
                </p>
            </div>
        )
    });
}   

export default ProductBlock;