import { useProducts } from "../../../contexts/ProductsProvider";
import classes from "./Products.module.css";

const Products = () => {
    const {productsData} = useProducts()
    return (
        <main className={classes.container}>
            {
                productsData.map(product => {
                    return (
                        <div className={classes.product} key={product.id}>
                            <img src={product.picture} alt={product.name}></img>
                            <span>Category: {product.category}</span>
                            <p>{product.name}</p>
                            <span>{product.description}</span>
                            <p>{product.price} <button>Add to Card</button></p>
                        </div>
                    );
                })
            }
        </main>
    )
}

export default Products