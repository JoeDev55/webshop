import './NavBar.css';

function NavBar() {
  return (
    <div >
      <header className="App-header">
        <nav className='navBar'>
            <ul className='navItems'>
                <li >
                    <a href='#OrderNow.js'>Order Now</a>
                </li>
                <li>
                    <a href='#AboutUs.js'>Something</a>
                </li>
                <li>
                    <a href='#AboutUs.js'>My profile</a>
                </li>
                <li>
                    <a href='#AboutUs.js'>About Us</a>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;