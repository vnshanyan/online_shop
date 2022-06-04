/* eslint-disable */
import { useDispatch, useSelector } from "react-redux"
import { getProductsThunk } from "../../../redux/thunks/getProductsThunk"
import { useEffect } from "react"
import { getProductsSelector } from "../../../redux/slices/getProductsSlice"
import Cart from "../CartPage"
import HomeSlider from "../../HomeSlider/HomeSlider"
import FeaturedProducts from "../../FeaturedProducts/FeaturedProducts"

const HomePage = () => {
    const dispatch = useDispatch()
    const someProducts = useSelector(getProductsSelector)
  //  dispatch(getProductsThunk())

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    return (
        <>
            <HomeSlider />
            <FeaturedProducts/>
        </>
    )
}

export default HomePage