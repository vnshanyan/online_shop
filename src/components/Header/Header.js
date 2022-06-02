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
    // useEffect(() => {
    //     dispatch(getCartProductsThunk())
    // }, [])

  //  console.log(countCartProducts);

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
                        MAIN_ROUTES.map(({path,title}) => {
                            if((path==='login' || path==='register') && user){
                                return
                            }
                            return (
                                <li key={path}>
                                    <NavLink
                                        className={({isActive}) => 
                                            classNames(classes.link,{
                                                [classes.active]: isActive
                                            })
                                        }
                                        to={path}
                                    >
                                        {title}
                                        {path==='cart' && <img className={classes.cart}
                                            src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"/>
                                        }
                                        {path==='cart' && countCartProducts ? (
                                            <button className={classes.prodCount}>{countCartProducts}</button>
                                        ) : ('')}
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
        </header>
    )
}

export default Header