import HomePage from "../components/Pages/HomePage/HomePage"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import Cart from "../components/Pages/CartPage"
import Products from "../components/Pages/Products/Products"
import { Navigate } from "react-router-dom"
import ProductDetail from "../components/ProductDetail/ProductDetail"

export const MAIN_ROUTES = [
    {
        path: 'homePage',
        title: 'HOME PAGE',
        element: <HomePage/>
    },
    {
        path: 'products',
        title: 'PRODUCTS',
        element: <Products />,
        children: [
            {
                path: ':s',
                element: <Products />
            },
        ]
    },
    {
        path: 'products/product/:id',
        title: '',
        element: <ProductDetail />
    },
    {
        path: 'login',
        title: 'Login',
        element: <Login />
    },
    {
        path: 'register',
        title: 'Register',
        element: <Register />
    },
    {
        path: 'cart',
        title: 'Cart',
        element: <Cart/>
    }
]


export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: 'cart',
        element: <Register/>
    },
    {
        path: '*',
        element: <Navigate to='homePage'/>
    }
]
