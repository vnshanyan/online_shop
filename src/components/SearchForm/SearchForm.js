import { useForm } from "react-hook-form"
import { useState } from "react"
import classes from "./SearchForm.module.css";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../contexts/ProductsProvider";
import searchIcon from "../../assets/searchIcon.png";

const SearchForm = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const navigate = useNavigate();    
    const { allProducts } = useProductsContext();   
    const { filteredProducts, setFilteredProducts } = useProductsContext();

    const onSubmit = data => {
        const searchedProducts = allProducts.filter(product => {
            return product.name.toLowerCase().includes(data.search.toLowerCase()) || product.category.toLowerCase().includes(data.search.toLowerCase()) || product.description.toLowerCase().includes(data.search.toLowerCase());
        });
        setFilteredProducts(searchedProducts);
        navigate(`../products/${data.search}`);
        reset();
    }

    return (
        <div className={classes.formContainer}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={classes.label}>
                    <input {...register('search', {
                        required: true})} type="text" placeholder="Search products..." className={classes.formField}/>
                </label>
                <button type="submit" className={classes.formButton}><img src={searchIcon} alt="searchIcon" /></button>
            </form>
        </div>
    )
}

export default SearchForm;