import {Link, NavLink} from "react-router-dom"
import classes from "./Header.module.css"
import classNames from "classnames"
import {MAIN_ROUTES} from "../../helpers/routes"

const Header = () => {
    return (
        <header className={classes.header}>
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
                                    >{link.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}


export default Header