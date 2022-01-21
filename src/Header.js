import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"

function Header() {
  return <nav className='header'>
      <Link to="/Login">
      <img className='header__logo' src='https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png'></img>
      </Link>
      <div className='header__search'>
        <input type={"text"} className='header__searchInput'/>
        <SearchIcon className='header__searchIcon'/>
      </div>

      <div className='header__nav'>
        <Link to="/Login" className="header__link">
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Mihir!</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className='header__link'>
            <div className='header__optionBasket'>
              <ShoppingBasketIcon/>
              <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>

        </Link>
      </div>
  </nav>;
}

export default Header;