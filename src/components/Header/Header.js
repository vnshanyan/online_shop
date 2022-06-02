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


    // Creating LogOut function_START_
    const logOut = () => {
       sessionStorage.removeItem('user')
       localStorage.removeItem('user')
       dispatch(removeUser())
    }
    // Creating LogOut function_END_

    return (
        <header className={classes.header}>
             {/* Creating Logo_START_ */}
            <Link to="homePage">
                <img className={classes.logo} src="https://sekaikokeshi.com/wp-content/uploads/2021/01/kanji_fire.png"/>
            </Link>
             {/* Creating Logo_END_ */}
            <nav>
                <ul className={classes.ul}>
                    {
                        MAIN_ROUTES.map(({path,title}) => {
                            {/* Auth_START_ */}
                            if((path==='login' || path==='register') && user){
                                return
                            }
                            {/* Auth_END_ */}

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
                                        {/* SHOW Basket_START_ */}
                                        {path==='cart' && <img className={classes.cart}
                                            src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"/>
                                        }
                                        {/* SHOW Basket_END_ */}
                                        {/* SHOW Cart Count_START_ */}
                                        {path==='cart' && countCartProducts ? (
                                            <button className={classes.prodCount}>{countCartProducts}</button>
                                        ) : ('')}
                                        {/* SHOW Cart Count_END_ */}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>

            {/* Creating LogOut Link_START_ */}
            {user && (<div>
                <Link className={classes.logOut} onClick={logOut} to="homePage">Log out</Link>
                </div>)
            }
            {/* Creating LogOut Link_END_ */}
        </header>
    )
}

export default Header