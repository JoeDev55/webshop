import { Link } from "react-router-dom";
import './styles.css';

function NavBar() {
  return (
    <div >
      
        <nav className='navBar'>
            <ul className='navItems'>
                <li >
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/products'}>Products</Link>
                </li>
                <li>
                  <Link to={'/aboutUs'}>About Us</Link>
                </li>
                <li>
                  <Link to={'/myProfile'}>My profile</Link>
                </li>
            </ul>
        </nav>
      
    </div>
  );
}

export default NavBar;