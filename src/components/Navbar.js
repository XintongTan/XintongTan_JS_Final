import React from "react";

export default function Navbar() {
	const [show, setShow] = React.useState(false)

	const styles = {
		paddingBottom: show ? "20px" : "0px",
		color: show ? "darkorange" : "#F2EDD8",
		marginRight: show ? "80px" : "20px",
		fontSize: show ? "40px" : "32px"
	}

	return (
		<nav className="Nav" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
			<div style={styles} className="nav--icon" >
				<img src={process.env.PUBLIC_URL + '/img/paw1.png'} className="nav--paw"/>
			</div>
			<div className="nav--icon" style={styles}>
				<img src={process.env.PUBLIC_URL + '/img/paw2.png'} className="nav--paw" />
			</div>
			<div className="nav--icon" style={styles}>
				<img src={process.env.PUBLIC_URL + '/img/paw3.png'} className="nav--paw" />
			</div>
			<h1 style={styles}>M E O W !</h1>
	    </nav>
		)
}