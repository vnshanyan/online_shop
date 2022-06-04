import classes from "./ProductBlock.module.css";
import { NavLink } from "react-router-dom";

const ProductBlock = (props) => {
    return props.products?.map((product) => {
        return (
            <div className={classes.product} key={product.id}>
                <div className={classes.productImageContainer}>
                    <img src={product.picture} alt={product.name} />
                </div>
                <div className={classes.productBody}>
                    <span className={classes.productCategory}>Category: {product.category}</span>
                    <p className={classes.productTitle}>{product.name}</p>
                    <span className={classes.productDescription}>{product.description}</span>
                </div>
                <div className={classes.productFooter}>
                    <p className={classes.productPrice}>${product.price}</p>
                    <NavLink to={`/products/product/${product.id}`}>
                        <button>View More</button>
                    </NavLink>
                </div>
            </div>
        )
    });
}   

export default ProductBlock;