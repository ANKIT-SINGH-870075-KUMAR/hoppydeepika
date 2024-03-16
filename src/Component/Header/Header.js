import React from 'react';
import "../../App.css";
import logo from "../Image/HobbyCue Logo.png";
import star from "../Image/Hobbies.png";
import explore from "../Image/Explore.png";
import bookmark from "../Image/bookmark_black_24dp 1.png";
import bell from "../Image/notifications_black_24dp 1.png";
import cart from "../Image/Product 3.png";
import search from "../Image/search.png";
import search1 from "../Image/icons8_search 1.png";
import DropDown from '../DropDowm/DropDown';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white d-flex justify-content-center align-items-center">
  <div className="container navbar-container py-2">
    <Link className="navbar-brand" to="/">
        <img src={logo} alt='' className='logo-img'/>
    </Link>
          <Link className="nav-link text-secondary d-flex phone-search-input" aria-current="page" to="#">
          <input className="form-control bg-light" type="search" placeholder="Search here.." aria-label="Search"/>
          <img src={search} alt />
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <div className='d-flex align-items-center'>
    <Link className="nav-link me-2" to="#"><img src={search1} alt/></Link>
    <Link className="nav-link me-2" to="#"><img src={bell} alt/></Link>
      <span className="navbar-toggler-icon"></span>
      </div>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown me-2">
          <Link className="nav-link dropdown-bs-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={explore} alt/>  Explore
            <IoIosArrowDown className='ms-1 text-secondary'/>
          </Link>
          <ul className="dropdown-menu p-0 w-60 mt-4" aria-labelledby="navbarDropdown">
             <DropDown/>
          </ul>
        </li>
        <li className="nav-item dropdown me-2">
          <Link className="nav-link dropdown-bs-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={star} alt/>   Hobbies
            <IoIosArrowDown className='ms-1 text-secondary'/>
          </Link>
          <ul className="dropdown-menu p-0 w-60 mt-4" aria-labelledby="navbarDropdown">
             <DropDown/>
          </ul>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link" to="#"><img src={bookmark} alt/></Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link" to="#"><img src={bell} alt/></Link>
        </li>
        <li className="nav-item me-2">
          <Link className="nav-link" to="#"><img src={cart} alt/></Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link to="/sign" className="btn btn-outline-purple" type="submit">Sign In</Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header;