import classes from "./Footer.module.css"
import classNames from "classnames"
import FooterContacts from "../FooterContacts/FooterContacts";
import {Link, NavLink} from "react-router-dom"
import logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footerInner}>
                    <div className={classes.footerMain}>
                        <Link to="homePage">
                            <img className={classes.footerLogo} src={logo} alt="logo"/>
                        </Link>

                        <div className={classes.footerAboutUs}>
                            <h4>About Us</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <FooterContacts/>
                    </div>
                    <div className={classes.footerCopyright}>
                        <p>Copyright Manimen Production © 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer