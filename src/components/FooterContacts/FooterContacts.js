import classes from "./FooterContacts.module.css";

const FooterContacts = () => {
	return (
		<div className={classes.contacts}>
			<h4>Mail To Us</h4>
			<div className={classes.contactUs}>
				<a href="mailto:vardouhy.nshanyan@gmail.com" className={classes.link}>Varduhi Nshanyan</a>
				<a href="mailto:kh.varagyan@gmail.com" className={classes.link}>Khachatur Varagyan</a>
				<a href="mailto:armen.matevosyan7@gmail.com" className={classes.link}>Armen Matevosyan</a>
				<a href="mailto:levonghalachyan@gmail.com" className={classes.link}>Levon Ghalachyan</a>
			</div>
		</div>
	)
}

export default FooterContacts;