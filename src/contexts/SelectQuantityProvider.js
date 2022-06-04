import {createContext, useContext,useState} from "react";

const SelectQuantityContext = createContext(null)

const SelectQuantityProvider = ({children}) => {
    const [selectQuantity, setSelectQuantity] = useState([])

    // Onchange function for products_START
    const handleSelect = (e) =>{
        const repeateObj = selectQuantity.find(item=>item.productId===e.target.id)
        if(repeateObj){
            repeateObj.productQty = e.target.value
            repeateObj.buyQty = Number(e.target.className) - Number(e.target.value)
            return setSelectQuantity([...selectQuantity])
        }
        const newObj = {
            productId:e.target.id,
            buyQty:Number(e.target.className) - Number(e.target.value),
            productQty:e.target.value
        }
        return setSelectQuantity([...selectQuantity,newObj])
    }
    // Onchange function for products_END
    
    return (
        <SelectQuantityContext.Provider value={{selectQuantity, setSelectQuantity,handleSelect}}>
            {children}
        </SelectQuantityContext.Provider>
    )
}

export const useSelectQuantityProvider = () => useContext(SelectQuantityContext)

export default SelectQuantityProvider