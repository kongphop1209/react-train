import { faAngleDown, faCartShopping, faSearch, faUser,} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo_giant.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  return (
    <div>
      <header className="nav-bar-container">
        <div className="logo-container">
          <a href="#Home"><img src={logo}/></a>
        </div>
        <div className="search-bar-container">
          <a className='search-bar-cate'>
            <a className='all-cate-butt' href="#"><span>All categories</span><FontAwesomeIcon icon={faAngleDown}/></a>
            <input className="search-input" type="text" placeholder="Search Anything" />
          </a>
          <a href="#">
            <h4 className='search-icon'>
            <FontAwesomeIcon icon={faSearch}/>
          </h4>
          </a>
        </div>
        <div className="nav-bar-route">
          <a className='nav-route-item' href="#registration"><FontAwesomeIcon icon={faUser}/><span>Account</span></a>
          <a className='nav-route-item' href="#cart"><FontAwesomeIcon icon={faCartShopping}/><span>Shopping</span></a>
        </div>
      </header>
    </div>
  )
}

export default NavBar