import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header className='header-title'>
      <Link to='/'>
        <img className='BB-logo' src={logo} alt='Breaking Bad logo'></img>
      </Link>
    </header>
  )
}

export default Header;