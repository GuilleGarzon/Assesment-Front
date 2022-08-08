import { NavLink } from 'react-router-dom';
import '../../styles/ProductDetail.css';

const NavBar = () => (
	<nav className='header'>
		<NavLink to='/' className='header__home'>
			Home
		</NavLink>
		<NavLink to='/about' className='header__about'>
			About
		</NavLink>
	</nav>
);

export default NavBar;
