
import { useProductsContext } from "../../contexts/ProductsProvider";
import ProductBlock from "../ProductBlock/ProductBlock";
import classes from "./FeaturedProducts.module.css";


const FeaturedProducts = () => {
    const {allProducts} = useProductsContext(); 
    const randomProducts = allProducts.sort(() => Math.random() - Math.random()).slice(0, 4);

    return (
        <section className={classes.featuredProductsSection}>
            <h2>Featured Products</h2>
            <div className={classes.featuredProductsWrapper}>
                {
                allProducts.length > 0 && 
                    <ProductBlock products={randomProducts} />
                }
                {allProducts.length === 0 && "No products for your criteria."}
            </div>
        </section>
    );
}

export default FeaturedProducts;