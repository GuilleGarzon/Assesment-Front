import { NavLink } from 'react-router-dom';
import '../../styles/Home.css';

function HeaderHome() {
  return (
    <nav className="header">
        <NavLink to="/about" className="header__link">About</NavLink>
        <h1 className='header__h1'>Products</h1>
    </nav>
  );
}

export default HeaderHome;
