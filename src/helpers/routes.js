import HomePage from "../components/Pages/HomePage/HomePage"
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import { Navigate } from "react-router-dom"

export const MAIN_ROUTES = [
    {
        path: 'homePage',
        title: 'HOME PAGE',
        element: <HomePage/>
    },
    {
        path: 'products',
        title: 'PRODUCTS',
        element: ''
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
        element: <Register />
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
