import {createContext, useContext,useState} from "react";

const SelectQuantityContext = createContext(null)

const SelectQuantityProvider = ({children}) => {
    const [selectQuantity, setSelectQuantity] = useState([])

    const handleSelect = (e) =>{
        const repeateObj = selectQuantity.find(item=>item.productId===e.target.id)
        if(repeateObj){
            repeateObj.productQty = e.target.value
            return setSelectQuantity([...selectQuantity])
        }
        const newObj = {
            productId:e.target.id,
            productQty:e.target.value,
        }
        return setSelectQuantity([...selectQuantity,newObj])
    }
    return (
        <SelectQuantityContext.Provider value={{selectQuantity, setSelectQuantity,handleSelect}}>
            {children}
        </SelectQuantityContext.Provider>
    )
}

export const useSelectQuantityProvider = () => useContext(SelectQuantityContext)

export default SelectQuantityProvider