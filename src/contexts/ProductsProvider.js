import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../api/api";

const ProductsContext = createContext(null)

const ProductsProvider = ({children}) => {
    const [productsData, setProductsData] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
        axios.get(`${baseUrl}/products`)
            .then(res => {
                setProductsData(res.data)
            })
            .catch(err => console.log(err))
    }

    // const sendPost = (text, author, date = '07.05.2022') => {
    //     const id = `${author}${text.substr(0, 4)}`.trim()
    //     const obj = {
    //         author, date, text, id
    //     }

    //     axios.post(`${baseUrl}/messages`, obj)
    //         .then(res => console.log(res))
    //         .then(() => {
    //             setMessagesData(prev => [obj, ...prev])
    //         })
    //         .catch(err => console.log(err))
    // }

    // const deletePost = id => {
    //     axios.delete(`${baseUrl}/messages/${id}`)
    //         .then(res => console.log(res))
    //         .then(() => {
    //             const filteredMessages = messagesData.filter(item => item.id !== id)
    //             setMessagesData(filteredMessages)
    //         })
    //         .catch(err => console.log(err))
    // }

    return <ProductsContext.Provider value={{productsData}}>
        {children}
    </ProductsContext.Provider>

//     return <ProductsContext.Provider value={{productsData, sendPost, deletePost}}>
//     {children}
// </ProductsContext.Provider>
}

export const useProducts = () => useContext(ProductsContext)

export default ProductsProvider