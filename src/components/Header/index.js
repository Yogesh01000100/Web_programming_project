import { withRouter } from 'react-router-dom'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cookie from 'js-cookie'
import './header.css'
import SearchBox from '../SearchBox';
import { BsBookmarkStarFill } from "react-icons/bs"
import { MdSpaceDashboard } from "react-icons/md"
import { FaCodepen } from "react-icons/fa"
import {RxHamburgerMenu} from "react-icons/rx"


const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const { history } = props
    history.replace('/login')
    console.log('test')

  }

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">

        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <div className='kol'>
              <div className='lok'><FaCodepen /></div>
              <div className='had'>Decentron</div>

            </div>

          </NavLink>

          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links_op"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cryptocurrencies" className="nav-links_op">
                Cryptocurrencies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/trade" className="nav-links_op">
                Trade
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact to="/login"
                className="nav-link_5"
                onClick={onClickLogout}
              >
                Logout
              </NavLink>
            </li>
            <li className="nav-item j">
              <RxHamburgerMenu/>
            </li>


          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>

      </nav>
      <div className='main_low_part'>
        <div className='low_part'>

          <div className='cols'>
            <p>Market Cap: <span className='idp'>$1,565,123,569,899</span></p>
          </div>
          <div className='cols'>
            24h Vol:<span className='idp'>$34,556,895,989</span>
          </div>
          <div className='cols'>
            <p>Dominance: <span className="idp">BTC:45% ETH:19%</span></p>
          </div>

        </div>
        <div className='low_part'>
          
          <div className='cols'>
            <div className='top'>
              <div className='cols_op'><BsBookmarkStarFill /></div>
              <div className='l'>Watchlist</div>
            </div>
          </div>
          <div className='cols'>
            <div className='top'>
              <div className='cols_op'><MdSpaceDashboard /></div>
              <div className='l'>Portfolio</div>
            </div>
          </div>

          <div className='lopp'>
            <SearchBox />
          </div>
        </div>
      </div>

    </>
  )
}
export default withRouter(Header)
