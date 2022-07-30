import { NavLink } from 'react-router-dom';
import '../../styles/About.css'

function HeaderAbout() {
  return (
    <nav className="header">
        <NavLink to="/" className="header__home">Home</NavLink>
    </nav>
  );
}

export default HeaderAbout;
