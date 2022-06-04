import React from "react";
import { useState } from "react";
import classes from "./Filters.module.css";
import { useProductsContext } from "../../contexts/ProductsProvider";
import { Slider } from "@mui/material";
import { useParams } from "react-router-dom";

const Filters = () => {  
    const { allProducts, setAllProducts } = useProductsContext();
    const { filteredProducts, setFilteredProducts } = useProductsContext();
    const { price, setPrice } = useProductsContext();
    const { minPrice } = useProductsContext();
    const { maxPrice } = useProductsContext();
    const [ category, setCategory ] = useState('');
    const {s} = useParams();

    const categories = allProducts?.map(product => product.category)
    .filter((value, index, self) => self.indexOf(value) === index);
    
    const changePrice = (event, value) => {
        setPrice(value);
    };

    const changeCategory = (event) => {
        setCategory(event.target.value?.length ? event.target.value : '');
    }

    const clearFilters = () => {
        setFilteredProducts(allProducts);
        setPrice([minPrice, maxPrice]);
        setCategory('');
    }

    const applyFilters = () => {
        const filtered = allProducts?.filter(product => {
            if( price.length !== 0 && category !== '' ) {
                return product.price >= price[0] && product.price <= price[1] && product.category === category
            }else if( price.length !== 0 ) {                
                return product.price >= price[0] && product.price <= price[1];
            }else if( category !== '' ) {
                return product.category === category
            } else {
                return filteredProducts;
            }
        });
        setFilteredProducts(filtered);
    }

    return (
        <aside className={classes.filtersSidebar}>
            <h4>Filters</h4>  
            
            <div className={classes.filters}>
                <div className={classes.filterByPrice}>
                    <h5 className={classes.filterByPriceTitle}>Filter By Price</h5>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={price}
                        min={minPrice}
                        max={maxPrice}
                        valueLabelDisplay="auto"
                        onChange={changePrice}
                    />  
                </div>

                <div className={classes.filterByCategory}> 
                    <h5 className={classes.filterByCategoryTitle}>Filter By Category</h5>
                    <select value={category} className={classes.changeCategory} onChange={(event) => changeCategory(event)}>
                        <option value="">Select category</option>
                        { 
                            categories?.map((category, index) => {
                                return <option key={index} value={category}>
                                    {category}
                                </option>
                            })
                        }
                    </select>
                </div>
                
                <div className={classes.filtersFooter}>
                    <button type="button" className={classes.clearFilters} onClick={clearFilters}>Clear Filters</button>
                    <button type="button" className={classes.applyFilters} onClick={applyFilters}>Apply Filters</button>
                </div>
            </div>
        </aside>
    );
}

export default Filters;