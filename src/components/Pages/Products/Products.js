import { useProducts } from "../../../contexts/ProductsProvider";
import classes from "./Products.module.css";

import src from '../../../images/drone.jpg';

const Products = () => {
    const {productsData} = useProducts()
    // const src = '../../../images/';
    return (
        <main className={classes.container}>
            {
                productsData.map(product => {
                    return (
                        <div className={classes.product} key={product.id}>
                            <img src={src} alt={product.name}></img>
                            {/* cosole.log({`${src}${product.picture}`}) */}
                            {/* <img src={require(`${src}${product.picture}`)} alt={product.name}></img> */}
                            {/* <img src={`${src}+${product.picture}`} alt={product.name}></img> */}
                            {/* <img src={`../../../images/drone.jpg`} alt={product.name}></img> */}
                            {/* ${product.picture} */}
                            
                            {/* <p>Category: {product.category}</p> */}
                            {/* <p>{product.picture}</p> */}
                            <p>{product.name}</p>
                            <span>{product.description}</span>
                            <p>{product.price}</p>
                            <button>Add to Card</button>
                        </div>
                    );
                })
            }
        </main>
    )
}

export default Products