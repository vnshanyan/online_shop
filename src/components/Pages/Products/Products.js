import classes from "./Products.module.css";
import Filters from "../../Filters/Filters";
import { useProductsContext } from "../../../contexts/ProductsProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductBlock from "../../ProductBlock/ProductBlock";

const Products = () => {        
    const {allProducts} = useProductsContext();
    const {filteredProducts, setFilteredProducts} = useProductsContext();
    const {s} = useParams();

    useEffect(() => {
        if( s === undefined ) {
            setFilteredProducts(allProducts);
        }
    }, [s]);     

    return (
        <section className={`${classes.productsSection} ${s !== undefined ? classes.productsSearchSection : '' }`}>
            {
                s !== undefined && <h1>Search results for: {s} </h1>
            }
            {
                s == undefined && <Filters /> 
            }

            <div className={classes.productsWrapper}>
                {
                filteredProducts.length > 0 && 
                    <ProductBlock products={filteredProducts} />
                }
                {filteredProducts.length === 0 && "No products for your criteria."}
            </div>
        </section>
    );
}

export default Products;