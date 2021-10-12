import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo2.jpg';
import { useAuth } from "../../hooks";

import { useLocation } from "react-router";
import { useSelector } from "react-redux";


export default function Header() {
  let auth = useAuth();
  let location = useLocation();

  const favorite = useSelector((state) => state.favorite.favoriteIds)

  return (
    <header className="page-header">
      <div className="container-full flex">
        <div className="header-logo flex-center">
          <Link exact to='/'>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className='nav-menu flex-center'>
          <li className='nav-item'>
            <NavLink className='flex-center' exact to='/' activeClassName='nav-active'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='flex-center' to='/products' activeClassName='nav-active'>
              Product
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='flex-center' to='/profile' activeClassName='nav-active'>
              Account
            </NavLink>
          </li>
        </nav>
        <ul className='header-action flex'>
          <li className='action-item flex-center'>
            <Link to={location.pathname}>
              <i className="lar la-heart la-2x icon-heart"></i>
              {!favorite.length ?
                null :
                <span className="action-badge fav-badge txt-center">
                  {favorite.length}
                </span>
              }
            </Link>
          </li>
          <li className='action-item flex-center'>
            <Link to={location.pathname}>
              <i className="las la-shopping-cart la-2x icon-cart"></i>
              {/* <span className="action-badge cart-badge txt-center"></span> */}
            </Link>
          </li>
          <li className='action-item flex-center'>
            <i className="lar la-user la-2x icon-user"></i>
            {auth.user ?
              <span>Welcome, {auth.user}</span>
              :
              <Link to='/login'>
                <button className='btn btn-round btn-login'>Sign in</button>
              </Link>
            }
          </li>
        </ul>
      </div>
    </header>
  )
}
