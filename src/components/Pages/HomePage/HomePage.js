/* eslint-disable */
import { useDispatch, useSelector } from "react-redux"
import { getProductsThunk } from "../../../redux/thunks/getProductsThunk"
import { useEffect } from "react"
import { getProductsSelector } from "../../../redux/slices/getProductsSlice"


const HomePage = () => {
    const dispatch = useDispatch()
    const someProducts = useSelector(getProductsSelector)
  //  dispatch(getProductsThunk())

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    console.log(someProducts);
    return (
        <div>
            HomePage
        </div>
    )
}

export default HomePage