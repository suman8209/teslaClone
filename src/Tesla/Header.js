import React, { useState } from 'react';
import Logo from "../images/logo.svg"
import CloseIcon from '@mui/icons-material/Close';


function Header() {

	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header>
			<div className='logo'>
				<a href=''>
					<img src={Logo} alt="Logo" />
				</a>
			</div>

			<ul className='centerMenu'>
				<li><a href="">Model 3</a></li>
				<li><a href="">Model s</a></li>
				<li><a href="">Model x</a></li>
				<li><a href="">Model Y</a></li>
				<li><a href="">Solar Roof</a></li>
				<li><a href="">Solar Panel</a></li>
			</ul>

			<ul className='rightMenu'>
				<li><a href="">Shop</a></li>
				<li><a href="">Account</a></li>
				<li><a href="#" onClick={() => setMenuOpen(true)}>Menu</a></li>
			</ul>

			<ul className='sideMenu' style={{ right: menuOpen ? "0" : '-300px' }}>
				< CloseIcon onClick={() => setMenuOpen(false)} />
				<li><a href="">Model S</a></li>
				<li><a href="">Model 3</a></li>
				<li><a href="">Model X</a></li>
				<li><a href="">Model Y</a></li>
				<li><a href="">Solar Roof</a></li>
				<li><a href="">Solar Panel</a></li>
				<li><a href="">Existing Inventory</a></li>
				<li><a href="">Used Inventory</a></li>
				<li><a href="">Trade In</a></li>
				<li><a href="">Test Drive</a></li>
				<li><a href="">Powerwall</a></li>
				<li><a href="">Commercial Energy</a></li>
			</ul>



		</header>


	)
}

export default Header