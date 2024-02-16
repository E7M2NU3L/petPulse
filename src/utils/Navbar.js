import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import AppLogo from '../assets/images/logo.jpeg';

const Navbar = () => {
  return (
    <main className='navbar-container'>
      <nav className='navbar flex justify-between items-center lg:justify-around shadow-lg shadow-orange-300'>

        {/* App Logo */}
        <div className='app-logo ml-2 relative'>
          <Link to="/" className='img-holder' >
            <img 
            src={AppLogo}
            alt='logo'
            className='border border-1 rounded-full'
            style={{
              width: "48px"
            }} 
            />
          </Link>
        </div>

        {/* Nav Links */}
        <div className='nav-link-holder'>
          <ul className='nav-links flex justify-around gap-4 items-center'>
            <li className=''>
              <Link to="/shop" className='nav-link'>Shop</Link>
            </li>
            <li className=''>
              <Link to="/cart" className='nav-link'>Cart</Link>
            </li>
            <li className=''>
              <Link to="/profile" className='nav-link'>Profile</Link>
            </li>
          </ul>
        </div>

        {/* Register Page */}
        <div className='btn-login'>
          <Link to="/login" className='login text-[#fefedf] bg-teal-500 hover:shadow-md hover:shadow-green-300 hover:font-2xl font-semibold hover:font-bold'>Login</Link>
        </div>
      </nav>
    </main>
  )
}

export default Navbar