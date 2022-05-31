import {Link, NavLink} from "react-router-dom"
import classes from "./Header.module.css"
import classNames from "classnames"
import {MAIN_ROUTES} from "../../helpers/routes"
import { useDispatch } from "react-redux"
import { removeUser, loginSelector } from "../../redux/slices/loginSlice"
import { useSelector } from "react-redux"
import { getCartProductsSelector } from "../../redux/slices/getCartProductsSlice"
import { getCartProductsThunk } from "../../redux/thunks/getCartProductsThunk"
import { useEffect } from "react"

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(loginSelector)
    const countCartProducts = useSelector(getCartProductsSelector)
    useEffect(() => {
        dispatch(getCartProductsThunk())
    }, [])

    console.log(countCartProducts);

    const logOut = () => {
       sessionStorage.removeItem('user')
       localStorage.removeItem('user')
       dispatch(removeUser())
    }

    return (
        <header className={classes.header}>
            <Link to="homePage">
                <img className={classes.logo} src="https://sekaikokeshi.com/wp-content/uploads/2021/01/kanji_fire.png"/>
            </Link>
            <nav>
                <ul className={classes.ul}>
                    {
                        MAIN_ROUTES.map(link => {
                            return (
                                <li key={link.path}>
                                    <NavLink
                                        className={({isActive}) => 
                                            classNames(classes.link,{
                                                [classes.active]: isActive
                                            })
                                        }
                                        to={link.path}
                                    >
                                        {link.path!=='cart' && link.path!=='login' && link.path!=='register' && link.title}
                                        {(link.path==='login' && !user)  && link.title}
                                        {(link.path==='register' && !user)  && link.title}
                                        {link.path==='cart' && <img className={classes.cart}
                                            src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"/>
                                        }
                                        {link.path==='cart' && countCartProducts ? (
                                            <button className={classes.prodCount}>{countCartProducts}</button>
                                        ) : (
                                            ''
                                        )}
                                        {link.path==='cart' && link.title}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            {user && (<div>
                <Link className={classes.logOut} onClick={logOut} to="homePage">Log out</Link>
                </div>)
            }
            {/* <Link to="cart" className={classes.cart}>
                <img height="50px" width="auto"
                    src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"/>
                Cart
            </Link> */}
        </header>
    )
}

export default Header