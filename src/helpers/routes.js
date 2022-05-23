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
        path: 'contactUs',
        title: 'CONTACT US',
        element: ''
    },
    {
        path: 'aboutUs',
        title: 'ABOUT US',
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
        path: 'logout',
        title: 'Log out',
        element: <HomePage/>
    }
]


export const ROUTES = [
    ...MAIN_ROUTES,
    {
        path: '*',
        element: <Navigate to='homePage'/>
    }
]
